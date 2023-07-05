import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";
import { handleUpdateCarrousel } from "../../../services/general";
import { handleUpdateStoryCarrousel } from "../../../services/stories";
import {
  Filters,
  deleteStory,
  fetchBooks,
  updateNewBookStatus,
  updateStoryTemplate,
} from "../../../slicer/books/books.actions";
import {
  updateFailNotification,
  updateSuccessNotification,
} from "../../../slicer/general/general.actions";

interface Props {
  tableData: any;
}

const useList = ({ tableData }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCarrouselAction = async (payload: {
    signal: boolean;
    documentID: string;
  }) => {
    try {
      await handleUpdateCarrousel(payload);
      await handleUpdateStoryCarrousel(payload);
      dispatch(updateSuccessNotification("Story added to carrousel"));
    } catch {
      dispatch(updateFailNotification("Story not added to carrousel"));
    }
  };

  useEffect(() => {
    const filters: Filters = {
      onlyActive: false,
    };
    dispatch(fetchBooks(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAction = (type: string, id: number, value?: any) => {
    switch (type) {
      case "carrousel": {
        const signal = tableData[id].carrousel ?? false;
        const payload = {
          signal: !signal,
          documentID: tableData[id].documentID,
        };
        handleCarrouselAction(payload);
        break;
      }
      case "newBook": {
        const signal = tableData[id].active ?? true;
        const payload = {
          signal: !signal,
          documentID: tableData[id].documentID,
        };
        dispatch(updateNewBookStatus(payload));
        break;
      }
      case "updateTemplate": {
        const payload = {
          template: value,
          documentID: tableData[id].documentID,
        };

        dispatch(updateStoryTemplate(payload));
        break;
      }
      case "delete": {
        const payload = {
          documentID: tableData[id].documentID,
          title: tableData[id].title,
        };

        dispatch(deleteStory(payload));
        break;
      }
      case "edit": {
        const document = tableData[id].documentID;
        const newPath = ROUTE_PATHS.ADMIN_BOOKS_EDIT.replace(":id", document);
        navigate(newPath);
        break;
      }
      default:
        break;
    }
  };

  return { handleAction };
};

export default useList;
