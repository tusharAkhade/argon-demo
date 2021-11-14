import React from "react";
import { Button, Paper } from "@mui/material";
import { Toolbar, Typography } from "@mui/material";

function SubHeader() {
  return (
    <>
      <div className="subheader-main-container div-position">
        <Toolbar
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "20px 0" }}
          >
            <h3 style={{ marginRight: "20px", color: "#fff" }}>Tables</h3>
            <Paper
              style={{
                maxHeight: "48px",
                padding: "12px 16px",
                backgroundColor: "#e9ecef",
              }}
            >
              home / Tables / Tables
            </Paper>
          </div>

          <div>
            <button className="subheader-btn" style={{ marginRight: "15px" }}>
              New
            </button>
            <button className="subheader-btn">Filter</button>
          </div>
        </Toolbar>
      </div>
    </>
  );
}

export default SubHeader;
