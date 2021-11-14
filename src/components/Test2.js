import React from "react";
import { Paper, Toolbar } from "@mui/material";
import MUIDataTable from "mui-datatables";

function Test2() {
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
        <Paper sx={{ width: "100%" }}>
          <MUIDataTable
            //   data={data}
            //   columns={columns}
            title={"Light mode"}
            //   options={options}
          />
        </Paper>
      </Toolbar>
    </div>
  );
}

export default Test2;
