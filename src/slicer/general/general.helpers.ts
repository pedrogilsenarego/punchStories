import { firestore } from "../../firebase/utils";
import firebase from "firebase/app";

export const handleUpdatePosts = () => {
  return new Promise<number>((resolve, reject) => {
    const docRef = firestore.collection("general").doc("metrics");
   
    docRef
      .update({
        posts: firebase.firestore.FieldValue.increment(1),
      })
      .then(() => {
        return docRef.get();
      })
      .then((doc) => {
        const updatedPosts = doc.data()?.posts || 0;
        resolve(updatedPosts);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
