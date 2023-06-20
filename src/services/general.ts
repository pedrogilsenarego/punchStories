import firebase from "firebase/app";
import { firestore } from "../firebase/utils";
import { handleFetchListStories } from "./stories";

export const handleUpdateCarrousel = (payload: { signal: boolean, documentID: string }) => {
  const { signal, documentID } = payload;
  
  return new Promise<void>((resolve, reject) => {
    const carrouselDocRef = firestore.collection("general").doc("carrousel");

    const updateData = signal
      ? { listStories: firebase.firestore.FieldValue.arrayUnion(documentID) }
      : { listStories: firebase.firestore.FieldValue.arrayRemove(documentID) };
     
    carrouselDocRef
      .update(updateData)
     
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};




export const handleFetchCarrouselHelper = () => {
  return new Promise<string[]>((resolve, reject) => {
    const carrouselDocRef = firestore.collection("general").doc("carrousel");

    carrouselDocRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const listStories = data?.listStories || [];
          resolve(listStories);
        } else {
          resolve([]); // Resolve with an empty array if the document doesn't exist
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

