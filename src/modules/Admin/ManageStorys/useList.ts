import { useDispatch } from "react-redux";
import {
  deleteStory,
  fetchBooks,
  updateNewBookStatus,
  updateStoryTemplate,
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

  const handleAction = (type: string, id: number, value?:any) => {
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
      case "updateTemplate":{
        const payload = {
          template: value,
          documentID: tableData[id].documentID
        }
       
          dispatch(updateStoryTemplate(payload))
          break;
      }
      case "delete": {
        const payload = {
          documentID: tableData[id].documentID,
          title: tableData[id].title
        };
        
        dispatch(deleteStory(payload));
        break;
      }
      default:
        break;
    }
  };

  return { handleAction };
};

export default useList;
