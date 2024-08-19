import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import heroImg from "./resources/hero-img.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
        padding: { xs: "20px", md: "50px 100px" },
        borderRadius: "8px",
        height: { xs: "auto", md: "600px" }, // Adjusted height for responsiveness
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "500", fontSize: { xs: "24px", md: "31px" } }}
          >
            Skip the travel! Find Online
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#000000",
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Medical <span style={{ color: "#3b82f6" }}>Centers</span>
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ color: "#5C6169", fontSize: { xs: "14px", md: "16px" } }}
          >
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#3b82f6",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Find Centers
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={heroImg}
            alt="Medical Professionals"
            sx={{
              width: "100%",
              maxWidth: { xs: "300px", md: "500px" }, // Adjusting max-width for responsiveness
              margin: "0 auto",
              display: "block",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
