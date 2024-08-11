import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

let Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box component="div">
          <Box
            component="svg"
            sx={{ width: 40, height: 40, mr: 2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14 2L10 22M22 14L2 10" />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            MORETODO
          </Typography>
        </Box>
        <Box component="div" className="align-right">
          ⚡ The Ultimate Todo App
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
