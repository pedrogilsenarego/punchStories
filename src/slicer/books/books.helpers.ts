import { firestore } from "./../../firebase/utils";

export const handleFetchBooks = ({persistProducts = []}) => {
  return new Promise((resolve, reject) => {
    
    const pageSize=10

    let ref = firestore
      .collection("books")
      .limit(pageSize);
    
    ref
      .get()
      .then((snapshot: any) => {
        const totalCount = snapshot.size;

        const data = [
          ...persistProducts,
          ...snapshot.docs.map((doc: any) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1,
        });
      })
      .catch((err:any) => {
        reject(err);
      });
  });
};

export const handleFetchBook = (documentID:string) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("books")
      .doc(documentID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve(snapshot.data());
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleAddBook = (payload:any) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("books")
      .doc()
      .set(payload)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};