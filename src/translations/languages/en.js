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
            "This project is born with the essential eagerness to talk with and about people, whether we know them or not, and compile their moments of impact.<br /><br /> The stories that will be told are those of real people, who “strip” to expose their moments of loss, pain, happiness and anguish. Although these people are real, they may tell their stories under a pseudonym to protect the impact of their stories on others.<br /><br /> A good story is timeless and can change attitudes.<br /><br /> I want to make an impact!<br /><br /> Teresa Sá",
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
        contacts: {
          title: "_Contacts",
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
