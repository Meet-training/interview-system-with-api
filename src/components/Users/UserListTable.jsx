import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import actions from "../../redux/Users/actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserResultTable = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.UsersTable);

  console.log(userData);

  const handleAddUser = (e) => {
    e.preventDefault();
    history.push("/addUsers");
    console.log("Clicked...");
  };

  React.useEffect(() => {
    dispatch(actions.getUsersReport());
  }, []);

  const editHandler = () => {};

  const deleteResultHandler = (id) => {
    // console.log("Clickeedddd....", id);
    dispatch(actions.deleteUsers(id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 2,
          mx: 1,
        }}
      >
        <Typography variant="h5">User List</Typography>

        <Button
          variant="contained"
          onClick={handleAddUser}
          sx={{
            bgcolor: "#999c19",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#b4b81c",
            },
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add Users
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ bgcolor: "#999c19" }}>
            <TableRow>
              <StyledTableCell align="left">FirstName</StyledTableCell>
              <StyledTableCell align="left">LastName</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.first_name}</StyledTableCell>
                <StyledTableCell align="left">{row.last_name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => editHandler(row._id)}>
                    <EditIcon sx={{ color: "mediumseagreen" }} />
                  </Button>
                  <Button onClick={() => deleteResultHandler(row._id)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserResultTable;
