import React from "react";
import { Box, Typography } from "@mui/material";

const OralHealthDayCard = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#3b82f6", fontWeight: "bold", marginBottom: "10px" }}
      >
        This World Oral Health Day,
      </Typography>

      <Typography
        variant="h4"
        sx={{ color: "#3b82f6", fontWeight: "bold", marginBottom: "10px" }}
      >
        Get a <span style={{ color: "#00A3E0" }}>FREE Appointment</span>
      </Typography>

      <Typography variant="h6" sx={{ color: "#000000", marginBottom: "10px" }}>
        with Top Dentists.
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "#6B7280", fontStyle: "italic", marginBottom: "10px" }}
      >
        LIMITED PERIOD OFFER
      </Typography>

      <Typography
        variant="h6"
        sx={{ color: "#3b82f6", fontWeight: "bold", marginBottom: "10px" }}
      >
        #BeSensitiveToOralHealth
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "#6B7280", marginTop: "20px", fontStyle: "italic" }}
      >
        *T&C Apply - only consultation fee. Procedures/surgeries not covered
      </Typography>
    </Box>
  );
};

export default OralHealthDayCard;
