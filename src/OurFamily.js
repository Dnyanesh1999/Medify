import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FamilyStatsImage from "./resources/family.png"; // Replace with the actual path

const OurFamiliesSection = () => {
  return (
    <Box
      sx={{
        margin: "50px 0",
        padding: "50px 0", // Adjust padding to control top and bottom space
        backgroundColor: "#E7F0FF",
        display: "flex",
        justifyContent: "center", // Centers the entire section
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ maxWidth: "1200px" }} // Limits the content width to ensure centering
      >
        {/* Left Side with Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#3b82f6", marginBottom: "10px" }}
          >
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography
            variant="h3"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            Our Families
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "30px" }}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </Typography>
        </Grid>

        {/* Right Side with Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={FamilyStatsImage}
            alt="Our Families Stats"
            sx={{
              width: "100%",
              borderRadius: "16px",
              maxWidth: "400px", // Adjusts the max width of the image
              display: "block",
              margin: "0 auto", // Centers the image within its grid column
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurFamiliesSection;
