import { firestore } from "../../firebase/utils";
import { storage } from "../../firebase/utils";

export const handleFetchBooks = ({ persistProducts = [], pageSize=6, onlyActive=false }) => {
  return new Promise((resolve, reject) => {
    

    let ref = firestore.collection("stories").limit(pageSize);
    if (onlyActive) ref = ref.where("active", "==", true);

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
      .catch((err: any) => {
        reject(err);
      });
  });
};

export const handleFetchBook = (documentID: string) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("stories")
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



export const handleAddCoverPage = async (title:string, files:any) => {
  const a = Array.prototype.slice.call(files);
  const c:any = []
  const uploadImageAsPromise = (imageFile:any) => {
    return new Promise<void>((resolve, reject) => {
      storage
        .ref(`stories/${title}/${imageFile.name}`)
        .put(imageFile)
        .then(() => {
          storage
            .ref("stories")
            .child(title)
            .child(imageFile.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url)
              console.log(url)
              c.push(url);
              
            });
        })
        .catch((err) => {
          reject(err);
        });
      // storageRef.on(
      //   "state_changed",
      //   (snapshot) => {
      //     // const progressD = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      //     // setProgress(progressD)
      //   },
    });}
  
  for (var i = 0; i < a.length; i++) {
    var imageFile = a[i];
    await uploadImageAsPromise(imageFile);
}
return c

  
};

export const handleAddBook = (payload: any) => {
 
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("stories")
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

//
export const handleUpdateNewBookStatus = (payload:{signal:boolean, documentID:string}) => {
  const { documentID, signal } = payload;
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("stories")
      .doc(documentID)
      .update({
        active: signal
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//

export const handleFetchCarroussell = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("general")
      .doc("carrousell")
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

export const handleUpdateCarroussell = (content:string[]) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("general")
      .doc("carrousell")
      .update({
        content
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleAddCarroussellImage = async (files:any) => {
  const a = Array.prototype.slice.call(files);
  const c:any = []
  const uploadImageAsPromise = (imageFile:any) => {
    return new Promise<void>((resolve, reject) => {
      storage
        .ref(`carroussell/${imageFile.name}`)
        .put(imageFile)
        .then(() => {
          storage
            .ref("carroussell")
            .child(imageFile.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url)
              console.log(url)
              c.push(url);
              
            });
        })
        .catch((err) => {
          reject(err);
        });
      // storageRef.on(
      //   "state_changed",
      //   (snapshot) => {
      //     // const progressD = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      //     // setProgress(progressD)
      //   },
    });}
  
  for (var i = 0; i < a.length; i++) {
    var imageFile = a[i];
    await uploadImageAsPromise(imageFile);
}
return c

  
};

export const handleDeleteCarroussellStorage = async (list:string[]) => {
  if(list.length<=1) return
  const uploadImageAsPromise = (fileRef:any) => {
    return new Promise<void>((resolve, reject) => {
      fileRef
      .delete()
        .then(() => {
         resolve()
        })
        .catch((err:any) => {
          reject(err);
        });
     
    });}
  
  for (var i = 1; i < list.length; i++) {
    var imageFile = list[i];
    var fileRef = storage.refFromURL(imageFile);
    await uploadImageAsPromise(fileRef);
}

  
};


