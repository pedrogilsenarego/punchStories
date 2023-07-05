const bookTypes = {
  FETCH_BOOKS: "FETCH_BOOKS",
  SET_BOOKS: "SET_BOOKS",
  FETCH_BOOK: "FETCH_BOOK",
  SET_BOOK: "SET_BOOK",
  ADD_BOOK: "ADD_BOOK",
  DELETE_STORY: "DELETE_STORY",
  UPDATE_PROGRESS: "UPDATE_PROGRESS",
  //
  UPDATE_NEW_BOOK_STATUS: "UPDATE_NEW_BOOK_STATUS",
  UPDATE_TEMPLATE_STATUS: "UPDATE_TEMPLATE_STATUS",
  //
  FETCH_CARROUSSELL: "FETCH_CARROUSSELL",
  SET_CARROUSSELL: "SET_CARROUSSELL",
  UPDATE_CARROUSELL: "UPDATE_CARROUSSELL",
  ADD_NEW_IMAGE_CARROUSSELL: "ADD_NEW_IMAGE_CARROUSSELL",
  EDIT_BOOK: "EDIT_BOOK",
};

export interface Books {
  books: {
    data: Book[];
  };
  book: Book;
  carroussell: string[];
  progress: number;
}

export interface Book {
  documentID: string;
  name: string;
  location: string;
  resume: string;
  resumeEN: string;
  language: string;
  content2: string[];
  active?: boolean;
  createdDate?: Date;
  template?: string;
  punchLines: string[];
  punchLinesEN: string[];
  ps: string;
  psEN: string;
  postNumber: number;
  carrousel: boolean;
}

export default bookTypes;
