import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import MobileFrame from "./resources/mobileFrame.png"; // Path to the mobile frame image
import MobileScreen from "./resources/mobilecontaint.png"; // Path to the mobile screen image
import GooglePlay from "./resources/google_play.png.png"; // Path to the Google Play button image
import AppStore from "./resources/apple_store.png.png"; // Path to the App Store button image

const DownloadAppSection = () => {
  return (
    <Box sx={{ backgroundColor: "#E7F0FF", padding: "50px 20px" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side with Mobile Images */}
        <Grid item xs={12} md={6} sx={{ position: "relative", top: "100px" }}>
          <Box
            sx={{
              position: "relative",
              width: "300px",
              height: "600px",
              margin: "0 auto",
            }}
          >
            {/* Back Image */}
            <Box
              component="img"
              src={MobileFrame}
              alt="Mobile Back"
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "auto",
                zIndex: 1,
              }}
            />
            {/* Front Image */}
            <Box
              component="img"
              src={MobileScreen}
              alt="Mobile Front"
              sx={{
                position: "absolute",
                top: "35px",
                left: "9px",
                width: "285px",
                height: "auto",
                zIndex: 2,
              }}
            />
          </Box>
        </Grid>

        {/* Right Side with Text and Buttons */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Download the <span style={{ color: "#3b82f6" }}>Medify</span> App
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Get the link to download the app
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
          >
            <TextField
              variant="outlined"
              placeholder="+91 Enter phone number"
              sx={{ marginRight: "10px", flexGrow: 1 }}
            />
            <Button variant="contained" color="primary">
              Send SMS
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              component="img"
              src={GooglePlay}
              alt="Google Play"
              sx={{ width: "150px", marginRight: "10px" }}
            />
            <Box
              component="img"
              src={AppStore}
              alt="App Store"
              sx={{ width: "150px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DownloadAppSection;
