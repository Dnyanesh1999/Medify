import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Search from "./Search";

// Icons
import LabIcons from "./resources/LabIcon.png";
import DoctorIcon from "./resources/DoctorIcon.png";
import CapsuleIcon from "./resources/CapsuleIcon.png";
import AmbulanceIcon from "./resources/AmbulanceIcon.png";
import HospitalIcon from "./resources/HospitalIcon.png";

const SearchContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: "30px 20px",
        borderRadius: "16px",
        boxShadow: "6px 6px 35px rgba(0, 0, 0, 0.1)",
        position: "relative",
        zIndex: 1,
        marginTop: "-170px",
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* Search Section */}
      <Search />

      {/* You may be looking for Section */}
      <Typography variant="h6" sx={{ marginTop: "30px", textAlign: "center" }}>
        You may be looking for
      </Typography>

      <Grid
        container
        spacing={2} // Reduce spacing to avoid overlapping
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FAFBFE",
              borderRadius: "8px",
              padding: "20px", // Adjust padding to ensure content fits well
              height: "153px",
              //   width: "100%", // Set width to 100% to make it responsive
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={DoctorIcon}
              alt="Doctors"
              sx={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#374151" }}>
              Doctors
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FAFBFE",
              borderRadius: "8px",
              padding: "20px",
              height: "153px",
              //   width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={LabIcons}
              alt="Labs"
              sx={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#374151" }}>
              Labs
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FAFBFE",
              borderRadius: "8px",
              padding: "20px",
              height: "153px",
              //width: "100%",
              textAlign: "center",
              border: "1px solid #2AA7FF",
            }}
          >
            <Box
              component="img"
              src={HospitalIcon}
              alt="Hospitals"
              sx={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#374151" }}>
              Hospitals
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FAFBFE",
              borderRadius: "8px",
              padding: "20px",
              height: "153px",
              //width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={CapsuleIcon}
              alt="Medical Store"
              sx={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#374151" }}>
              Medical Store
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FAFBFE",
              borderRadius: "8px",
              padding: "20px",
              height: "153px",
              //width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={AmbulanceIcon}
              alt="Ambulance"
              sx={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <Typography variant="body1" sx={{ color: "#374151" }}>
              Ambulance
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchContainer;
