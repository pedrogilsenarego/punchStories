import { Box, Card, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../../components/Buttons/Button";
import TableList from "../../../components/TableList";
import { Colors } from "../../../constants/pallette";
import { ROUTE_PATHS } from "../../../constants/routes";
import { State } from "../../../slicer/types";
import { Title } from "../../../styles";
import { i18n } from "../../../translations/i18n";
import { tableColumns } from "./Constants";
import { mapBooksItems } from "./mapper";
import useList from "./useList";

const ManageStorys = () => {
  const navigate = useNavigate();
  const tableData = useSelector<State, any>(
    (state) => state.books.books.data || []
  );

  const { handleAction } = useList({ tableData });

  return (
    <>
      <Title fontSize="16px">{i18n.t("adminSideBar.submitBook")}</Title>
      <Divider />

      {tableData.length > 0 && (
        <Card style={{ padding: "20px" }}>
          <TableList
            columns={tableColumns}
            rows={mapBooksItems(tableData).rows}
            onAction={handleAction}
          />
        </Card>
      )}
      <Box style={{ marginTop: "60px" }}>
        <Box
          display="flex"
          justifyContent="start"
          style={{ marginBottom: "40px" }}
        >
          <Button
            borderRadius="6px"
            label="Criar nova história"
            props={{
              border: `solid 2px ${Colors.darkGrey}`,
              paddingHorizontal: "5px",
            }}
            propsLabel={{ fontSize: "12px", leterSpacing: "2px" }}
            onClick={() => navigate(ROUTE_PATHS.ADMIN_STORIES_CREATE)}
          />
        </Box>
      </Box>
    </>
  );
};

export default ManageStorys;
