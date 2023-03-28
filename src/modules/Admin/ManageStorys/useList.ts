import { useDispatch } from "react-redux";
import {
  fetchBooks,
  updateNewBookStatus,
} from "../../../slicer/books/books.actions";
import { useEffect } from "react";
import { Filters } from "../../../slicer/books/books.actions";

interface Props {
  tableData: any;
}

const useList = ({ tableData }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filters: Filters = {
      onlyActive: false,
    };
    dispatch(fetchBooks(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAction = (type: string, id: number) => {
    switch (type) {
      case "newBook": {
        const signal = tableData[id].active ?? true;
        const payload = {
          signal: !signal,
          documentID: tableData[id].documentID,
        };
        dispatch(updateNewBookStatus(payload));
        break;
      }
      default:
        break;
    }
  };

  return { handleAction };
};

export default useList;
