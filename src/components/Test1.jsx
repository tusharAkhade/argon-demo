// import React from "react";
// import { Paper, Toolbar } from "@mui/material";
// import MaterialTable from "material-table";
// import MUIDataTable from "mui-datatables";

// function Test1() {
//   // const tableData = [
//   //   {
//   //     project: "logo and text",
//   //     budget: "2500 USD",
//   //     status: "pending",
//   //     users: "4 users",
//   //     completion: "progress bar",
//   //   },
//   // ];
//   const data = [
//     { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//     { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//     { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//     {
//       name: "James Houston",
//       company: "Test Corp",
//       city: "Dallas",
//       state: "TX",
//     },
//   ];
//   // const columns = [
//   //   { name: "PROJECT", label: "project" },
//   //   { name: "BUDGET", label: "budget" },
//   //   { name: "STATUS", label: "status" },
//   //   { name: "USERS", label: "users" },
//   //   { name: "COMPLETION", label: "completion" },
//   // ];
//   const columns = [
//     {
//       name: "name",
//       label: "Name",
//       options: {
//         filter: true,
//         sort: true,
//       },
//     },
//     {
//       name: "company",
//       label: "Company",
//       options: {
//         filter: true,
//         sort: false,
//       },
//     },
//     {
//       name: "city",
//       label: "City",
//       options: {
//         filter: true,
//         sort: false,
//       },
//     },
//     {
//       name: "state",
//       label: "State",
//       options: {
//         filter: true,
//         sort: false,
//       },
//     },
//   ];

//   const options = {
//     filterType: "checkbox",
//   };
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
//         <Paper sx={{ width: "100%" }}>
//           <MUIDataTable
//             data={data}
//             columns={columns}
//             title={"Light mode"}
//             options={options}
//           />
//         </Paper>
//       </Toolbar>
//     </div>
//   );
// }

// export default Test1;
