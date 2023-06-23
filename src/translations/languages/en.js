export const content = {
  en: {
    translations: {
      forms: {
        required: "Required",
        fileSize: "The file must be under ",
      },
      topBar: {
        memory: "Memory",
        hope: "Hope",
        audacity: "Audacity",
      },
      menuBar: {
        about: "_about",
        stories: "_stories",
        contacts: "_contacts",
      },

      adminSideBar: {
        submitBook: "Manage Stories",
        manageCarroussel: "Manage Carroussell",
        back: "Back",
      },
      modules: {
        home: {
          carrousel: {
            button: "Visit Story",
          },
          mainTextBtn: "READ MORE",
          stories: "_Stories",
        },
        about: {
          title: "_About The Project",
          mainText:
            "ÀBolina was conceived to tell people stories. Stories that cherish memory. Stories that give us hope. Stories that inspire us to be audacious, to have courage and resilience. The creative books we publish are high quality in pictures and content, and are aimed at reinforcing a desire to strive for a greater good in children and teenagers.\n\n Above all, we hope that our stories meet the needs of families educating their children to be confident, balanced individuals, capable of making responsible choices, able to think for themselves, perceive where the truth lies and to act with kindness.",
        },
        books: {
          book: {
            bookTitle: "Title",
            text: "Text:",
            price: "Price:",
            design: "Design:",
            translation: "Translation:",
            pages: "Number of pages:",
            language: "Idioma:",
            weight: "Weight:",
            size: "Size",
            collectionBrowser: "More from Collection",
            bookBrowser: "VIEW THE\n BOOK",
            new: "New",
            title: "RESUME",
            writer: "WRITER",
            designer: "DESIGNER",
            translator: "TRANSLATOR",
          },
          viewBook: {
            page: "PAGES",
          },
        },
        admin: {
          manageBooks: {
            createButton: "Add new Story",
            submitBook: {
              breadCrumbs: "Manage Books - Submit Book",
              submitTitle: "Submit Book",
              title: "Title",
              pages: "Number Pages",
              coverPage: "Cover Page",
              content: "Content",
              author: "Author",
              authorResume: "Author Resume",
              designer: "Designer",
              designerResume: "Designer Resume",
              translatorResume: "Translator Resume",
              translator: "Translator",

              size: "Size",
              resume: "Resume",
              price: "Price",
              template: "Template",
              punchLines: "Punch Lines",
              ps: "Post Scriptum",
            },
            tableList: {
              title: "Title Story",
              createdDate: "Created Date",
              template: { title: "Template", tooltip: "Change Template" },
              newBook: {
                title: "New Story?",
                accept: "Yes",
                deny: "Cancel",
                confirmationDescription:
                  "Are you sure you want to change the status of this story?",
                confirmationTitle: "Change status of new story",
                tooltip: "New Story status",
              },
            },
          },

          manageCarroussell: {
            submitTitle: "Manage Carroussell",
            imagesKeep: "Images to keep",
            imagesDelete: "Images to Delete",
          },
        },
      },
      notifications: {
        success: {
          newBook: "Book added with success",
          updateCarroussell: "The carroussell was updated",
          newCarrousselImage: "New image was added to the carroussell",
          newBookStatusChanged: "Book status changed",
        },
        fail: {
          fetchStories: "Somethng went wrong, while getting the stories",
          newBook: "Somethng went wrong, the book was not added",
          updateCarroussell: "The carroussell was not updated",
          newCarrousselImage: "New image failed to be added to the carroussell",
          newBookStatusChanged: "Book status failed to change",
        },
      },
    },
  },
};
