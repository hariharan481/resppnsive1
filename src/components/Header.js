import React from "react";
import "../styles/Header.css";
import Search from "./Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Year } from "./Year";
import { IconButton, Menu } from "@mui/material";

export const Header = () => {
  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="navbar"
          position="static"
          sx={{
            height: "80px",
          }}
        >
          <Toolbar variant="dense">
          <Menu sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,}} />
     
            <img
              className="logo"
              src="https://static.wixstatic.com/media/7607b5_dbdbad3954b74cd0b66694c3302204e0~mv2.png/v1/fill/w_275,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EMEDLOGIX_Final-01.png"
            ></img>
          </Toolbar>
        </AppBar>
      </Box>
      <Year />
 
      <Search/>
     
    </div>
  );
};
