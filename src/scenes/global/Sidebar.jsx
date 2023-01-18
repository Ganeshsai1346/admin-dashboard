/** @format */
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Container, Row } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Box></Box>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
