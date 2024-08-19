import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FAQImage from "./resources/faq.png"; // Replace with the actual path to the image
import HappyPatientsBadge from "./resources/smile.png"; // Replace with actual path
import HeartIcon from "./resources/heart.png"; // Replace with actual path

const FAQSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px", // Added padding for spacing
        textAlign: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "#3b82f6", marginBottom: "10px" }}
      >
        Get Your Answer
      </Typography>
      <Typography
        variant="h4"
        sx={{ marginBottom: "40px", fontWeight: "bold" }}
      >
        Frequently Asked Questions
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1200px", width: "100%" }} // Limit the max width of the grid
      >
        {/* Left Side with Image */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            component="img"
            src={FAQImage}
            alt="FAQ"
            sx={{
              width: "100%",
              borderRadius: "16px",
            }}
          />
          {/* Happy Patients Badge */}
          <Box
            component="img"
            src={HappyPatientsBadge}
            alt="84k+ Happy Patients"
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "-10px",
              width: "auto",
              height: "auto",
            }}
          />

          {/* Heart Icon */}
          <Box
            component="img"
            src={HeartIcon}
            alt="Heart Icon"
            sx={{
              position: "absolute",
              top: "15%",
              right: "10px",
              width: "100px",
              height: "100px",
            }}
          />
        </Grid>

        {/* Right Side with FAQ */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "10px",
              }}
            >
              Why choose our medical for your family?
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "10px",
              }}
            >
              Why we are different from others?
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "10px",
              }}
            >
              Trusted & experience senior care & love
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "10px",
              }}
            >
              How to get appointment for emergency cases?
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;
