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

import { useSelector, useDispatch } from "react-redux";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

import interviewResultActions from "../../redux/InterviewResult/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
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

const InterviewResultTable = () => {
  const dispatch = useDispatch();

  const resultlist = useSelector(
    (state) => state.interviewResult.InterviewResultTable
  );

  const history = useHistory();

  React.useEffect(() => {
    dispatch(interviewResultActions.getInterviewReport());
  }, []);

  const handleAddResult = (e) => {
    e.preventDefault();
    history.push("/addResult");
  };

  const editHandler = (id) => {
    dispatch(interviewResultActions.getSingleInterviewResultRequest(id));
    history.push(`/editResult/${id}`);
  };

  const deleteResultHandler = (id) => {
    dispatch(interviewResultActions.deleteInterviewResult(id));
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
              <StyledTableCell align="center">
                Practical Completion
              </StyledTableCell>
              <StyledTableCell align="center"> Coding Standard</StyledTableCell>
              <StyledTableCell align="center">
                Technical Completion
              </StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resultlist.map((row) => (
              <StyledTableRow key={`${row.id}`}>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.interviewer}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.practicalCompletion || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.codingStandard || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.technicalRound || "-"}
                </StyledTableCell>
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
        {resultlist.length === 0 && (
          <Typography variant="h6" sx={{ color: "red", my: 2 }}>
            No Record Found!
          </Typography>
        )}
      </TableContainer>
    </Box>
  );
};

export default InterviewResultTable;
