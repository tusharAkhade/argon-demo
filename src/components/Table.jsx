import { Paper, Toolbar, Typography } from "@mui/material";
import ReactTable from "react-table";
// import "react-table/react-table.css";

// import React from "react";

// function Table() {
//   return (
//     <div className="content-position">
//       <Toolbar
//         sx={{
//           position: "relative",
//           top: "-80px",
//           left: "250px",
//           width: "calc(100% - 250px)",
//         }}
//       >
//         <Paper sx={{ width: "100%", height: "500px", padding: "10px 20px" }}>

//         </Paper>
//       </Toolbar>
//     </div>
//   );
// }

// export default Table;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const data = [
    {
      iconName: "hello",
      budget: "$2500 USD",
      status: "pending",
      users: "abcd",
      completion: "60%",
    },
    {
      iconName: "hello",
      budget: "$2500 USD",
      status: "pending",
      users: "abcd",
      completion: "60%",
    },
    {
      iconName: "hello",
      budget: "$2500 USD",
      status: "pending",
      users: "abcd",
      completion: "60%",
    },
    {
      iconName: "hello",
      budget: "$2500 USD",
      status: "pending",
      users: "abcd",
      completion: "60%",
    },
    {
      iconName: "hello",
      budget: "$2500 USD",
      status: "pending",
      users: "abcd",
      completion: "60%",
    },
    // {
    //   iconName: ["bootstarp", "Argon design system"],
    //   budget: "$2500 USD",
    //   status: "pending",
    //   users: ["a", "b", "c", "d"],
    //   completion: "60%",
    // },
    // {
    //   iconName: ["bootstarp", "Argon design system"],
    //   budget: "$2500 USD",
    //   status: "pending",
    //   users: ["a", "b", "c", "d"],
    //   completion: "60%",
    // },
    // {
    //   iconName: ["bootstarp", "Argon design system"],
    //   budget: "$2500 USD",
    //   status: "pending",
    //   users: ["a", "b", "c", "d"],
    //   completion: "60%",
    // },
    // {
    //   iconName: ["bootstarp", "Argon design system"],
    //   budget: "$2500 USD",
    //   status: "pending",
    //   users: ["a", "b", "c", "d"],
    //   completion: "60%",
    // },
  ];
  const columns = [
    {
      Header: "PROJECT",
      accessor: "iconName",
    },
    {
      Header: "BUDGET",
      accessor: "budget",
    },
    {
      Header: "STATUS",
      accessor: "status",
    },
    {
      Header: "USERS",
      accessor: "users",
    },
    {
      Header: "COMPLETION",
      accessor: "completion",
    },
  ];
  const tableHeader = ["PROJECT", "BUDGET", "STATUS", "USERS", "COMPLETION"];
  return (
    <div className="content-position">
      <Toolbar
        sx={{
          position: "relative",
          top: "-80px",
          left: "250px",
          width: "calc(100% - 250px)",
        }}
      >
        <Paper sx={{ width: "100%", height: "500px", padding: "10px 20px" }}>
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableRow>Light table</TableRow>
              <TableHead>
                <TableRow>
                  <TableCell>PROJECT</TableCell>
                  <TableCell align="left">BUDGET</TableCell>
                  <TableCell align="left">STATUS</TableCell>
                  <TableCell align="left">USERS</TableCell>
                  <TableCell align="left">COMPLETION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}

          <Typography>Light table</Typography>
          <div style={{ border: "1px solid" }}></div>
          <ReactTable key={data.budget} data={data} columns={columns} />
        </Paper>
      </Toolbar>
    </div>
  );
}
