import { firestore, storage } from "../../firebase/utils";

export const handleFetchBooks = ({
  persistProducts = [],
  pageSize = 6,
  onlyActive = false,
}) => {
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

export const handleAddCoverPage = async (
  name: string,
  files: any,
  onProgressUpdate: (progress: number) => void
) => {
  const a = Array.prototype.slice.call(files);
  const c: any = [];
  let incrementLoad = 100 / a.length;
  let loadProgress = 0;

  const uploadImageAsPromise = (imageFile: any) => {
    return new Promise<void>((resolve, reject) => {
      storage
        .ref(`stories/${name}/${imageFile.name}`)
        .put(imageFile)
        .then(() => {
          storage
            .ref("stories")
            .child(name)
            .child(imageFile.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
              console.log(url);
              loadProgress = loadProgress + incrementLoad;
              onProgressUpdate(~~loadProgress);
              c.push(url);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  for (var i = 0; i < a.length; i++) {
    var imageFile = a[i];
    await uploadImageAsPromise(imageFile);
  }
  return c;
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
export const handleUpdateNewBookStatus = (payload: {
  signal: boolean;
  documentID: string;
}) => {
  const { documentID, signal } = payload;
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("stories")
      .doc(documentID)
      .update({
        active: signal,
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
export const handleUpdateTemplateStatus = (payload: {
  template: string;
  documentID: string;
}) => {
  const { documentID, template } = payload;
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("stories")
      .doc(documentID)
      .update({
        template: template,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchCarroussell = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("stories")
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

export const handleUpdateCarroussell = (content: string[]) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("general")
      .doc("carousel")
      .update({
        content,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleAddCarroussellImage = async (files: any) => {
  const a = Array.prototype.slice.call(files);
  const c: any = [];
  const uploadImageAsPromise = (imageFile: any) => {
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
              resolve(url);
              console.log(url);
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
    });
  };

  for (var i = 0; i < a.length; i++) {
    var imageFile = a[i];
    await uploadImageAsPromise(imageFile);
  }
  return c;
};

export const handleDeleteCarroussellStorage = async (list: string[]) => {
  if (list.length <= 1) return;
  const uploadImageAsPromise = (fileRef: any) => {
    return new Promise<void>((resolve, reject) => {
      fileRef
        .delete()
        .then(() => {
          resolve();
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  };

  for (var i = 1; i < list.length; i++) {
    var imageFile = list[i];
    var fileRef = storage.refFromURL(imageFile);
    await uploadImageAsPromise(fileRef);
  }
};

export const handleDeleteStory = (documentID: string) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("stories")
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteStoryStorage = async (
  title: string
): Promise<void> => {
  // Define folderPath
  const folderPath = `stories/${title}/`;

  const storageRef = storage.ref();
  const listRef = storageRef.child(folderPath);

  // Find all the prefixes and items.
  listRef
    .listAll()
    .then(async (res) => {
      // Process all the items under listRef
      const deletePromises: Promise<void>[] = res.items.map((itemRef) =>
        itemRef.delete()
      );
      await Promise.all(deletePromises);
      console.log("Folder deleted successfully");
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.error("Error deleting folder:", error);
    });
};

export const handleEditBook = (payload: {
  values: any;
  documentID: string;
}) => {
  const { documentID, values } = payload;
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("stories")
      .doc(documentID)
      .update(values) // update the document with the values object
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteBookStorage = async (name: string): Promise<void> => {
  // Define folderPath
  const folderPath = `stories/${name}/`;

  const storageRef = storage.ref();
  const listRef = storageRef.child(folderPath);

  // Find all the prefixes and items.
  listRef
    .listAll()
    .then(async (res) => {
      // Process all the items under listRef
      const deletePromises: Promise<void>[] = res.items.map((itemRef) =>
        itemRef.delete()
      );
      await Promise.all(deletePromises);
      console.log("Folder deleted successfully");
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.error("Error deleting folder:", error);
    });
};
