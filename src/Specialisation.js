import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DrugStore from "./resources/Drugstore.png";
import Stethoscope from "./resources/Stethoscope.png";
import HeartRate from "./resources/Heart Rate.png";
import HeartRateMonitor from "./resources/Heart Rate Monitor.png";
import BloodSample from "./resources/Blood Sample.png";
import Immune from "./resources/Immune.png";
import XRay from "./resources/X-Ray.png";

const specialisations = [
  { name: "Dentistry", icon: DrugStore },
  { name: "Primary Care", icon: Stethoscope },
  { name: "Cardiology", icon: HeartRate },
  { name: "MRI Resonance", icon: HeartRateMonitor },
  { name: "Blood Test", icon: BloodSample },
  { name: "Psicologist", icon: Immune },
  { name: "Laboratory", icon: DrugStore },
  { name: "X-Ray", icon: XRay },
];

const SpecialisationGrid = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        textAlign: "center",
        padding: { xs: "20px", sm: "40px 50px" },
        backgroundColor: "#E7F0FF",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "40px" }}>
        Find By Specialisation
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {specialisations.map((specialisation, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                height: { xs: "auto", md: "200px" },
                minHeight: "180px", // Ensures that height doesn't collapse
              }}
            >
              <Box
                component="img"
                src={specialisation.icon}
                alt={specialisation.name}
                sx={{ width: "80px", height: "80px", marginBottom: "20px" }}
              />
              <Typography variant="h6" sx={{ color: "#ABB6C7" }}>
                {specialisation.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "40px",
          backgroundColor: "#3b82f6",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        View All
      </Button>
    </Box>
  );
};

export default SpecialisationGrid;
