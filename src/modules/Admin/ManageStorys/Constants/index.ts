import { ColumnType } from "../../../../components/TableList/types";
import { i18n } from "../../../../translations/i18n";

export const tableColumns = [
  {
    id: "name",
    label: "Nome",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "createdDate",
    label: i18n.t("modules.admin.manageBooks.tableList.createdDate"),
    type: ColumnType.Date,
    sortable: false,
  },
  {
    id: "carrousel",
    label: "Activar carrosel",
    type: ColumnType.ActionComponent,
    sortable: false,
  },
  {
    id: "newBook",
    label: "Activar História",
    type: ColumnType.ActionComponent,
    sortable: false,
  },
  {
    id: "template",
    label: i18n.t("modules.admin.manageBooks.tableList.template.title"),
    type: ColumnType.Select,
    sortable: false,
  },
  {
    id: "delete",
    label: "Ações",
    type: ColumnType.ActionComponent,
    minWidth: 70,
    sortable: false,
  },
];
