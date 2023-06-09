import bookTypes, { Book, Books } from "./books.types";

export interface Filters {
  onlyActive?: boolean;
}

export const fetchBooks = (filters?: Filters) => ({
  type: bookTypes.FETCH_BOOKS,
  payload: filters || {},
});

export const setBooks = (books: Books) => ({
  type: bookTypes.SET_BOOKS,
  payload: books,
});

export const fetchBook = (documentID: string | undefined) => ({
  type: bookTypes.FETCH_BOOK,
  payload: documentID,
});

export const setBook = (book: Book) => ({
  type: bookTypes.SET_BOOK,
  payload: book,
});

export const addBook = (book: any) => ({
  type: bookTypes.ADD_BOOK,
  payload: book,
});

//
export const updateNewBookStatus = (payload: {
  signal: boolean;
  documentID: number | string;
}) => ({
  type: bookTypes.UPDATE_NEW_BOOK_STATUS,
  payload,
});
//
export const updateStoryTemplate = (payload: {
  template: string;
  documentID: number | string;
}) => ({
  type: bookTypes.UPDATE_TEMPLATE_STATUS,
  payload,
});

export const fetchCarroussell = () => ({
  type: bookTypes.FETCH_CARROUSSELL,
});

export const setCarroussell = (content: string[]) => ({
  type: bookTypes.SET_CARROUSSELL,
  payload: content,
});

export const updateCarroussell = (list: string[]) => ({
  type: bookTypes.UPDATE_CARROUSELL,
  payload: list,
});

export const addNewCarroussell = (newImage: any) => ({
  type: bookTypes.ADD_NEW_IMAGE_CARROUSSELL,
  payload: newImage,
});

export interface DeleteProps {
  documentID: string;
  title: string;
}

export const deleteStory = (payload: DeleteProps) => ({
  type: bookTypes.DELETE_STORY,
  payload: payload,
});

export const updateProgress = (payload: number) => ({
  type: bookTypes.UPDATE_PROGRESS,
  payload: payload,
});

export const editBook = (payload: any) => ({
  type: bookTypes.EDIT_BOOK,
  payload: payload,
});
