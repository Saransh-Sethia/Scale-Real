import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableContent = ({
  displayData,
  toRomanNumeral,
  fetchDetails,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, gap: "5px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{ width: "10px" }}>
              <h3>Episode No.</h3>
            </TableCell>
            <TableCell align="left" style={{ width: "25px" }}>
              <h3>Title</h3>
            </TableCell>
            <TableCell align="left" style={{ width: "25px" }}>
              <h3>Release Date</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayData.length !== 0 ? (
            displayData.map((element, id) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" style={{ width: "10px" }}>
                Episode {element.episode_id}
              </TableCell>
              <TableCell align="left" style={{ width: "25px", cursor:'pointer' }} onClick={()=>fetchDetails(id)}>
                {`Episode ${toRomanNumeral(element.episode_id)} `}
                {" - "}
                {element.title}
              </TableCell>
              <TableCell align="left" style={{ width: "25px" }}>
                {element.release_date}
              </TableCell>
            </TableRow>
          ))) : (
            <div style={{paddingLeft:'250px', paddingTop:'80px', fontWeight:'500'}}>No Details Found</div>
          )}
            
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
