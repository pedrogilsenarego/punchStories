const bookTypes = {
  FETCH_BOOKS: "FETCH_BOOKS",
  SET_BOOKS: "SET_BOOKS",
  FETCH_BOOK: "FETCH_BOOK",
  SET_BOOK: "SET_BOOK",
  ADD_BOOK: "ADD_BOOK",
  DELETE_STORY:"DELETE_STORY",
  UPDATE_PROGRESS:"UPDATE_PROGRESS",
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
  progress:number
}

export interface Book {
  documentID: string;
  
  title: string;
  titleEN: string;
  
  resume: string;
  resumeEN: string;
  language: string;
 
  content2: string[];
  
  active?: boolean;
  createdDate?: Date;
  template?: string;
  punchLines?: string[];
}

export default bookTypes;
