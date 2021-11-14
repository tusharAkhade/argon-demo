import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, Typography } from "@mui/material";
// import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const drawerWidth = 250;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sideBarItems = [
    {
      text: "Dashboard",
      icon: <InboxIcon />,
      path: "/dashboard",
    },
    {
      text: "Icons",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Google",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Profile",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Tables",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Login",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Register",
      icon: <InboxIcon />,
      path: "/",
    },
    {
      text: "Upgrade",
      icon: <InboxIcon />,
      path: "/",
    },
  ];

  const drawer = (
    <div>
      <Logo />
      <List>
        {sideBarItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className="list-item-text" />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography
          variant="subtitle2"
          className="list-item-text"
          sx={{ paddingLeft: "17px", fontWeight: 600 }}
        >
          DOCUMENTATION
        </Typography>
        {["Getting Started", "Foundation", "Components", "Plugins"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} className="list-item-text" />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "unset",
          // borderColor: "!important",
          borderBottom: "1px solid rgb(160,160,255)",
        }}
      >
        <Toolbar
          style={{
            height: "78px",
            backgroundColor: "#5e74e4",
          }}
        >
          <div className="header-container">
            <div>
              <Paper sx={{ background: "#FFF", borderRadius: "50px" }}>
                <IconButton sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className="seachbar-container"
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                />
              </Paper>
            </div>
            <div>
              <InboxIcon />
              <InboxIcon />
              <InboxIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
