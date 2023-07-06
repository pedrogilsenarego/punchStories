import { AiFillEdit } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { templates } from "../../../constants/templates";
import { Book } from "../../../slicer/books/books.types";
import { i18n } from "../../../translations/i18n";

const deleteIcon = (
  <ImCross fontSize="1em" color="black" style={{ cursor: "pointer" }} />
);

const editIcon = (
  <AiFillEdit fontSize="1.2rem" color="black" style={{ cursor: "pointer" }} />
);

const mapBookItem = (book: Book, pos: number) => {
  return {
    id: pos,
    name: book.name,
    createdDate: book.createdDate,
    carrousel: [
      {
        buttonType: "toggle",
        confirmationButtonLabel: i18n.t(
          "modules.admin.manageBooks.tableList.newBook.accept"
        ),
        declineButtonLabel: i18n.t(
          "modules.admin.manageBooks.tableList.newBook.deny"
        ),
        confirmationDescription:
          "Tem a certeza que quer activar a história no carrosel?",
        confirmationRequired: true,
        confirmationTitle: "Activar no carrosel",
        isActive: book.carrousel ?? false,
        disabled: false,
        event: "carrousel",
        label: "Activar no carrosel?",
      },
    ],
    newBook: [
      {
        buttonType: "toggle",
        confirmationButtonLabel: i18n.t(
          "modules.admin.manageBooks.tableList.newBook.accept"
        ),
        declineButtonLabel: i18n.t(
          "modules.admin.manageBooks.tableList.newBook.deny"
        ),
        confirmationDescription: "Tem a certeza que quer activar a história?",
        confirmationRequired: true,
        confirmationTitle: "Activar a história?",
        isActive: book.active ?? true,
        disabled: false,
        event: "newBook",
        label: "Activar a história?",
      },
    ],
    template: {
      value: book.template,
      confirmationButtonLabel: i18n.t(
        "modules.admin.manageBooks.tableList.newBook.accept"
      ),
      declineButtonLabel: i18n.t(
        "modules.admin.manageBooks.tableList.newBook.deny"
      ),
      confirmationDescription: i18n.t(
        "modules.admin.manageBooks.tableList.newBook.confirmationDescription"
      ),
      confirmationRequired: true,
      confirmationTitle: i18n.t(
        "modules.admin.manageBooks.tableList.newBook.confirmationTitle"
      ),
      options: templates,
      event: "updateTemplate",
      label: i18n.t("modules.admin.manageBooks.tableList.template.tooltip"),
    },
    delete: [
      {
        buttonType: "icon",
        event: "edit",
        icon: editIcon,
        label: "Edit",
      },
      {
        buttonType: "icon",
        event: "delete",
        icon: deleteIcon,
        label: "Remover História",
        confirmationButtonLabel: i18n.t(
          "modules.admin.manageBooks.tableList.newBook.accept"
        ),
        declineButtonLabel: i18n.t(
          "modules.admin.manageBooks.tableList.newBook.deny"
        ),
        confirmationDescription: "Tem a certeza que quer remover esta história",
        confirmationRequired: true,
        confirmationTitle: "Remover História",
      },
    ],
  };
};

const mapBooksItems = (cartItems: any) => {
  return { rows: cartItems.map((p: any, pos: number) => mapBookItem(p, pos)) };
};

export { mapBooksItems };

export const mapInitialForm = (data: any) => {
  return {
    name: data?.name || "",
    location: data?.location || "",
    locationEN: data?.locationEN || "",
    template: data?.template || 0,
    resume: data?.resume || "",
    resumeEN: data?.resumeEN || "",
    punchLines: data?.punchLines || [],
    punchLinesEN: data?.punchLinesEN || [],
    ps: data?.ps || "",
    psEN: data?.psEN || "",
    content: data?.content2 || [],
  };
};
