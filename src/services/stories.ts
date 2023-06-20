import { firestore } from "../firebase/utils";
import { Book } from "../slicer/books/books.types";
import firebase from "firebase/app";

export const handleUpdateStoryCarrousel = (payload: { signal: boolean, documentID: string }) => {
  const { signal, documentID } = payload;

  return new Promise<void>((resolve, reject) => {
    const carrouselDocRef = firestore.collection("stories").doc(documentID);

    carrouselDocRef
      .update({carrousel:signal})
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchListStories = (listBooks: string[]): Promise<Book[]> => {
  const bookRefs = listBooks.map((bookId) =>
    firestore.collection("stories").doc(bookId)
  );
  console.log("Fetching owned books");
  return new Promise((resolve, reject) => {
    firestore
      .collection("stories")
      .where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        bookRefs.map((bookRef) => bookRef.id)
      )
      .onSnapshot((query) => {
        const list: Book[] = [];
        query.forEach((doc) => {
          list.push({ documentID: doc.id, ...doc.data() } as Book);
        });
        resolve(list);
      }, reject);
  });
};
