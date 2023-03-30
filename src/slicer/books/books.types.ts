const bookTypes = {
  FETCH_BOOKS: "FETCH_BOOKS",
  SET_BOOKS: "SET_BOOKS",
  FETCH_BOOK: "FETCH_BOOK",
  SET_BOOK: "SET_BOOK",
  ADD_BOOK: "ADD_BOOK",
  DELETE_STORY:"DELETE_STORY",
  //
  UPDATE_NEW_BOOK_STATUS: "UPDATE_NEW_BOOK_STATUS",
  UPDATE_TEMPLATE_STATUS: "UPDATE_TEMPLATE_STATUS",
  //
  FETCH_CARROUSSELL: "FETCH_CARROUSSELL",
  SET_CARROUSSELL: "SET_CARROUSSELL",
  UPDATE_CARROUSELL: "UPDATE_CARROUSSELL",
  ADD_NEW_IMAGE_CARROUSSELL: "ADD_NEW_IMAGE_CARROUSSELL",
};

export interface Books {
  books: {
    data: Book[];
  };
  book: Book;
  carroussell: string[];
}

export interface Book {
  documentID: string;
  coverPage: string;
  title: string;
  titleEN: string;
  price: number;
  weight: string;

  translator: string;
  translatorResume: string;
  translatorResumeEN: string;
  author: string;
  authorResume: string;
  authorResumeEN: string;
  resume: string;
  resumeEN: string;
  language: string;
  size: string;
  pages: number;
  content2: string[];
  newBook?: boolean;
  active?: boolean;
  createdDate?: Date;
  template?: string;
  punchLines?: string[];
}

export default bookTypes;
