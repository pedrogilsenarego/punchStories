export const content = {
  pt: {
    translations: {
      forms: {
        required: "Obrigatório",
        fileSize: "O ficheiro tem de ser menos que ",
      },
      topBar: {
        memory: "Memória",
        hope: "Esperança",
        audacity: "Audácia",
      },
      menuBar: {
        about: "_sobre",
        stories: "_histórias",
        contacts: "_e tu?",
      },

      adminSideBar: {
        submitBook: "Gerir Histórias",
        manageCarroussel: "Gerir Carrousel",
        back: "Voltar",
      },
      modules: {
        home: {
          mainTextBtn: "LEIA MAIS",
          stories: "_Histórias",
        },

        about: {
          title: "_Sobre o Projecto",
          mainText:
            "A Editora ÀBolina nasce para contar histórias. Histórias que valorizam a memória. Histórias que estimulam a esperança. Histórias que motivam para a audácia, para a coragem e resiliência.\n\n Publicamos livros criativos e de boa qualidade de texto e imagem, que fortificam o desejo de um bem maior em crianças e adolescentes. Em especial, esperamos que as nossas histórias respondam à necessidade das famílias de educarem os seus filhos como pessoas auto-confiantes, equilibradas, capazes de escolhas responsáveis, de pensar e discernir a verdade e de agir com bondade.",
        },
        books: {
          book: {
            bookTitle: "Título",
            text: "Texto:",
            price: "Preço:",
            design: "Ilustração:",
            translation: "Tradução:",
            pages: "Número de páginas:",
            language: "Language:",
            weight: "Peso:",
            size: "Dimensões:",
            collectionBrowser: "Mais da Coleção",
            bookBrowser: "FOLHEAR\n O LIVRO",
            new: "Novo",
            title: "DESCRIÇÃO",
            writer: "AUTOR",
            designer: "ILUSTRADOR",
            translator: "TRADUTOR",
          },
          viewBook: {
            page: "PÁGINAS",
          },
        },
        admin: {
          manageBooks: {
            createButton: "Adicionar nova História",
            submitBook: {
              breadCrumbs: "Gerir Livros - Submeter Livro",
              submitTitle: "Submeter Livro",
              title: "Titulo",
              pages: "Número de paginas",
              coverPage: "Imagem Rosto",
              content: "Conteudo",
              author: "Escritor",
              authorResume: "Resumo do Escritor",
              designer: "Ilustrador",
              designerResume: "Resumo do Designer",
              translator: "Tradutor",
              translatorResume: "Resumo do Tradutor",
              language: "Idioma",
              weight: "Peso",
              size: "Tamanho",
              resume: "Resumo",
              price: "Preço",
              template: "Template",
              punchLines: "Punch Lines",
              ps: "Post Scriptum",
            },
            tableList: {
              title: "Título História",
              createdDate: "Data Criação",
              template: { title: "Template", tooltip: "Change Template" },
              newBook: {
                title: "Nova História?",
                accept: "Prosseguir",
                deny: "Cancelar",
                confirmationDescription:
                  "Tem a certeza que quer mudar o estado deste livro?",
                confirmationTitle: "Mudar o estado do livro",
                tooltip: "Novo Livro (estado)",
              },
            },
          },
          manageCarroussell: {
            submitTitle: "Gerir Carrousel",
            imagesKeep: "Imagens a manter",
            imagesDelete: "Imagens para apagar",
          },
        },
      },
      notifications: {
        success: {
          newBook: "Livro adicionado com sucesso",
          updateCarroussell: "O carrousel foi actualizado",
          newCarrousselImage: "Foi adicionada uma nova imagem ao carrousel",
          newBookStatusChanged: "Estado do livro foi alterado",
        },
        fail: {
          fetchStories: "Somethng went wrong, while getting the stories",
          newBook: "Livro não foi adicionado, algum erro ocorreu",
          updateCarroussell: "O carrousel não foi actualizado",
          newCarrousselImage: "Não foi adicionada uma nova imagem ao carrousel",
          newBookStatusChanged: "Estado do livro não foi alterado",
        },
      },
    },
  },
};
