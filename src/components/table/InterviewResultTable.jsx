import * as React from "react";
import { styled } from "@mui/material/styles";
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

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const InterviewResultTable = () => {
  const history = useHistory();

  const handleAddResult = (e) => {
    e.preventDefault();
    history.push("/add-result");
    console.log("Clicked...");
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
        <Typography variant="h5">Interview Result List</Typography>

        <Button
          variant="contained"
          onClick={handleAddResult}
          sx={{
            bgcolor: "#999c19",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#b4b81c",
            },
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add Result
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ bgcolor: "#999c19" }}>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="center">Candidate</StyledTableCell>
              <StyledTableCell align="center">Interviewer</StyledTableCell>
              <StyledTableCell align="center">Technology</StyledTableCell>
              <TableCell align="center" colSpan={2} sx={{ color: "white" }}>
                Experience
                <TableCell sx={{ color: "white" }}>Year</TableCell>
                <TableCell sx={{ color: "white" }}>Month</TableCell>
              </TableCell>
              <StyledTableCell align="center">Round</StyledTableCell>
              <StyledTableCell align="center">Communication</StyledTableCell>
              <StyledTableCell align="center">
                Practical Completion
              </StyledTableCell>
              <StyledTableCell align="center"> Coding Standard</StyledTableCell>
              <StyledTableCell align="center">
                Technical Completion
              </StyledTableCell>
              <StyledTableCell align="center">Notes</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InterviewResultTable;
