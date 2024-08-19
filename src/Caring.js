import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CompleteImage from "./resources/caring.png"; // Replace with actual path

const PatientCaringSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "30px 0",
        padding: { xs: "20px", md: "80px 300px" },
        backgroundColor: "#E7F0FF",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side with Image and Overlay */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            component="img"
            src={CompleteImage}
            alt="Consultation"
            sx={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              left: "10%",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            {/* <Typography variant="h6">Free Consultation</Typography>
            <Typography variant="body2">Consultation with the best</Typography> */}
          </Box>
        </Grid>

        {/* Right Side with Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#3b82f6", marginBottom: "10px" }}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography
              variant="h3"
              sx={{ marginBottom: "20px", fontWeight: "bold" }}
            >
              Patient <span style={{ color: "#3b82f6" }}>Caring</span>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "30px" }}>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  role="img"
                  aria-label="Checkmark"
                  style={{ color: "#3b82f6", marginRight: "10px" }}
                >
                  ✅
                </span>
                <Typography variant="body1">
                  Stay Updated About Your Health
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  role="img"
                  aria-label="Checkmark"
                  style={{ color: "#3b82f6", marginRight: "10px" }}
                >
                  ✅
                </span>
                <Typography variant="body1">
                  Check Your Results Online
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  role="img"
                  aria-label="Checkmark"
                  style={{ color: "#3b82f6", marginRight: "10px" }}
                >
                  ✅
                </span>
                <Typography variant="body1">
                  Manage Your Appointments
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientCaringSection;
