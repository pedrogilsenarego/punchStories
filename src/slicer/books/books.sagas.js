import { all, call, put, takeLatest } from "redux-saga/effects";
import { i18n } from "../../translations/i18n";
import { store } from "../createStore";
import {
  disableLoading,
  enableLoading,
  updateFailNotification,
  updateSuccessNotification,
} from "../general/general.actions";
import { handleUpdatePosts } from "../general/general.helpers";
import {
  fetchBooks,
  setBook,
  setBooks,
  setCarroussell,
  updateProgress,
} from "./books.actions";
import {
  handleAddBook,
  handleAddCarroussellImage,
  handleAddCoverPage,
  handleDeleteBookStorage,
  handleDeleteCarroussellStorage,
  handleDeleteStory,
  handleDeleteStoryStorage,
  handleEditBook,
  handleFetchBook,
  handleFetchBooks,
  handleFetchCarroussell,
  handleUpdateCarroussell,
  handleUpdateNewBookStatus,
  handleUpdateTemplateStatus,
} from "./books.helpers";
import bookTypes from "./books.types";

function* sagaFetchBooks({ payload }) {
  try {
    yield put(enableLoading());
    const books = yield handleFetchBooks(payload);
    yield put(setBooks({ ...books }));
    yield put(disableLoading());
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.fetchStories"))
    );
  }
}

export function* onFetchBooks() {
  yield takeLatest(bookTypes.FETCH_BOOKS, sagaFetchBooks);
}

function* sagaFetchBook({ payload }) {
  try {
    yield put(enableLoading());
    const book = yield handleFetchBook(payload);
    yield put(setBook({ ...book }));
    yield put(disableLoading());
  } catch (err) {
    yield put(updateFailNotification(i18n.t("notifications.fail.newBook")));
  }
}

export function* onFetchBook() {
  yield takeLatest(bookTypes.FETCH_BOOK, sagaFetchBook);
}

function* sagaAddBook({ payload }) {
  try {
    yield put(enableLoading());
    const timestamp = new Date();
    const { name, content } = payload;

    const postNumber = yield handleUpdatePosts();

    const onProgressUpdate = (progress) => {
      console.log(progress);
      store.dispatch(updateProgress(progress));
    };

    const content2 = yield call(
      handleAddCoverPage,
      name,
      content,
      onProgressUpdate
    );
    delete payload.content;

    yield handleAddBook({
      ...payload,
      content2,
      postNumber: postNumber,
      active: false,
      carrousel: false,
      createdDate: timestamp,
    });
    yield put(
      updateSuccessNotification(i18n.t("notifications.success.newBook"))
    );
    yield put(updateProgress(0));
    yield put(disableLoading());
  } catch (err) {
    yield put(updateFailNotification(i18n.t("notifications.fail.newBook")));
  }
}

export function* onAddBook() {
  yield takeLatest(bookTypes.ADD_BOOK, sagaAddBook);
}

//
function* sagaUpdateNewBookStatus({ payload }) {
  try {
    yield handleUpdateNewBookStatus(payload);
    yield put(fetchBooks());
    yield put(
      updateSuccessNotification(
        i18n.t("notifications.success.newBookStatusChanged")
      )
    );
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.newBookStatusChanged"))
    );
  }
}

export function* onUpdateNewBookStatus() {
  yield takeLatest(bookTypes.UPDATE_NEW_BOOK_STATUS, sagaUpdateNewBookStatus);
}

function* sagaUpdateTemplateStatus({ payload }) {
  try {
    yield handleUpdateTemplateStatus(payload);
    yield put(fetchBooks());
    yield put(
      updateSuccessNotification(
        i18n.t("notifications.success.newBookStatusChanged")
      )
    );
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.newBookStatusChanged"))
    );
  }
}

export function* onUpdateTemplateStatus() {
  yield takeLatest(bookTypes.UPDATE_TEMPLATE_STATUS, sagaUpdateTemplateStatus);
}

//

function* sagaFetchCarroussell() {
  try {
    const content = yield handleFetchCarroussell();
    yield put(setCarroussell(content));
  } catch (err) {}
}

export function* onFetchCarroussell() {
  yield takeLatest(bookTypes.FETCH_CARROUSSELL, sagaFetchCarroussell);
}

function* sagaUpdateCarroussell({ payload }) {
  try {
    const freshData = payload[0].data; // imagens que ficam no carrousel
    yield handleUpdateCarroussell(freshData);
    yield put(setCarroussell({ content: freshData }));
    const deleteData = payload[1].data;
    yield handleDeleteCarroussellStorage(deleteData);
    yield put(
      updateSuccessNotification(
        i18n.t("notifications.success.updateCarroussell")
      )
    );
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.updateCarroussell"))
    );
  }
}

export function* onUpdateCarroussell() {
  yield takeLatest(bookTypes.UPDATE_CARROUSELL, sagaUpdateCarroussell);
}

function* sagaNewImageCarroussell({ payload }) {
  try {
    const { newImage, list } = payload;
    const url = yield handleAddCarroussellImage(newImage);
    const newArray = list[0].data.concat(url);
    yield handleUpdateCarroussell(newArray);
    yield put(setCarroussell({ content: newArray }));
    yield put(
      updateSuccessNotification(
        i18n.t("notifications.success.newCarrousselImage")
      )
    );
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.newCarrousselImage"))
    );
  }
}

export function* onNewImageCarroussell() {
  yield takeLatest(
    bookTypes.ADD_NEW_IMAGE_CARROUSSELL,
    sagaNewImageCarroussell
  );
}

function* sagaDeleteStory({ payload }) {
  try {
    yield handleDeleteStory(payload.documentID);
    yield handleDeleteStoryStorage(payload.title);
    yield put(fetchBooks());

    yield put(
      updateSuccessNotification(
        i18n.t("notifications.success.updateCarroussell")
      )
    );
  } catch (err) {
    yield put(
      updateFailNotification(i18n.t("notifications.fail.updateCarroussell"))
    );
  }
}

export function* onDeleteStory() {
  yield takeLatest(bookTypes.DELETE_STORY, sagaDeleteStory);
}
//

function* sagaEditBook({ payload }) {
  const { documentID, name, values } = payload;

  const newTitle = values.name || name;

  try {
    yield put(enableLoading());

    if ("content" in values) {
      // se as fotos tiverem sido mexidas...

      yield handleDeleteBookStorage(payload.name); //delete nas fotos que existem

      const onProgressUpdate = (progress) => {
        console.log(progress);
        store.dispatch(updateProgress(progress));
      };
      const content = values.content;

      yield put(updateProgress(0));
      const content2 = yield call(
        handleAddCoverPage,
        newTitle,
        content,
        onProgressUpdate
      );

      values.content = content2;
    }

    const editPayload = {
      values,
      documentID,
    };
    console.log(editPayload);
    yield handleEditBook(editPayload);

    yield put(updateProgress(0));
    yield put(disableLoading());
    yield put(updateSuccessNotification("The book was edited"));
  } catch {
    yield put(updateFailNotification("Couldn't edit the book this time"));
  }
}

export function* onEditBook() {
  yield takeLatest(bookTypes.EDIT_BOOK, sagaEditBook);
}

export default function* bookSagas() {
  yield all([
    call(onFetchBooks),
    call(onFetchBook),
    call(onAddBook),
    call(onEditBook),
    call(onUpdateNewBookStatus),
    call(onUpdateTemplateStatus),
    call(onFetchCarroussell),
    call(onUpdateCarroussell),
    call(onNewImageCarroussell),
    call(onDeleteStory),
  ]);
}
