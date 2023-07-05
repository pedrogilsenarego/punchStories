import { QueryFunction, QueryKey } from "react-query";
import { handleFetchBook } from "../../slicer/books/books.helpers";

export const fetchBook: QueryFunction<any, QueryKey> = async ({ queryKey }) => {
  const documentID = queryKey[1] as string;

  try {
    console.log(`fetching book ${documentID}`);
    const data = await handleFetchBook(documentID);
    return data;
  } catch (error) {
    // Handle the error or throw it to be caught by React Query's error handling
    throw error;
  }
};
