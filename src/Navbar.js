import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "./resources/medify-logo.png";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar container position="static" style={{ backgroundColor: "#3b82f6" }}>
      <Box
        sx={{
          backgroundColor: "#2AA7FF",
          padding: "8px 16px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        The health and well-being of our patients and their healthcare team will
        always be our priority, so we follow the best practices for cleanliness.
      </Box>
      <Toolbar
        style={{
          backgroundColor: "#f3f4f6",
          justifyContent: isMobile ? "space-between" : "space-between",
          padding: isMobile ? "0 16px" : "0 24px",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            flexGrow: 1,
            textDecoration: "none",
            color: "#3b82f6",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Medify Logo"
            style={{ marginRight: "8px", height: isMobile ? "24px" : "32px" }}
          />
        </Typography>
        {isMobile ? (
          <IconButton color="inherit" edge="end">
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Box style={{ display: "flex", gap: "24px" }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                style={{ color: "#1f2937" }}
              >
                Find Doctors
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/hospitals"
                style={{ color: "#1f2937" }}
              >
                Hospitals
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/medicines"
                style={{ color: "#1f2937" }}
              >
                Medicines
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/surgeries"
                style={{ color: "#1f2937" }}
              >
                Surgeries
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/software"
                style={{ color: "#1f2937" }}
              >
                Software for Provider
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/facilities"
                style={{ color: "#1f2937" }}
              >
                Facilities
              </Button>
            </Box>
            <Button
              variant="contained"
              component={Link}
              to="/bookings"
              style={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                textTransform: "none",
              }}
            >
              My Bookings
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
