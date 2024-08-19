import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HospitalIcon from "./resources/hospitalIconcard.png"; // Replace with your hospital icon path
import ThumbsUpIcon from "./resources/thumbsupIcon.png"; // Replace with your thumbs-up icon path
import OralHealthDayCard from "./OralHealthDayCard";
import Booking from "./Booking"; // Import the Booking component
import DownloadAppSection from "./DownloadSection";
import Footer from "./Footer";
import FAQSection from "./FAQ";

const SearchResults = () => {
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [selectedCenterId, setSelectedCenterId] = useState(null); // Store only the ID of the selected center
  const [city, setCity] = useState("");

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const state = query.get("state");
    const selectedCity = query.get("city");

    setCity(selectedCity);

    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${selectedCity}`
      )
      .then((response) => setMedicalCenters(response.data))
      .catch((error) => console.error(error));
  }, [location.search]);

  const handleBookingClick = (centerId) => {
    setSelectedCenterId(centerId); // Set the selected center ID
  };

  const handleConfirmBooking = () => {
    alert("Booking confirmed!");
    setSelectedCenterId(null); // Reset the selected center after booking
  };

  return (
    <>
      <Box sx={{ padding: "139px" }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          {medicalCenters.length} medical centers available in {city}
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: "20px", color: "#6B7280" }}
        >
          Book appointments with minimum wait-time & verified doctor details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {medicalCenters.map((center) => (
              <Card
                key={center["Provider ID"]} // Use the correct property name
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    src={HospitalIcon}
                    alt="Hospital"
                    sx={{
                      width: "80px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#E7F0FF",
                      padding: "10px",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#3b82f6" }}
                    >
                      {center["Hospital Name"]}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6B7280" }}>
                      {center.Address}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6B7280" }}>
                      {center.City}, {center.State} - {center["ZIP Code"]}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "#6B7280",
                        marginRight: "10px",
                      }}
                    >
                      ₹500
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#10B981",
                        fontWeight: "bold",
                        display: "inline",
                      }}
                    >
                      FREE ₹0 Consultation fee at clinic
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                        backgroundColor: "#00A500",
                        padding: "2px 8px",
                        borderRadius: "5px",
                        width: "30px",
                      }}
                    >
                      <Box
                        component="img"
                        src={ThumbsUpIcon}
                        alt="Rating"
                        sx={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                        }}
                      />
                      <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                        {center["Hospital overall rating"] || 5}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "end",
                      minWidth: "250px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#10B981", fontWeight: "bold" }}
                    >
                      Available Today
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        marginTop: "10px",
                      }}
                      onClick={() => handleBookingClick(center["Provider ID"])}
                    >
                      Book FREE Center Visit
                    </Button>
                  </Box>
                </Box>

                {selectedCenterId === center["Provider ID"] && (
                  <Booking
                    center={center}
                    onConfirmBooking={handleConfirmBooking}
                  />
                )}
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <OralHealthDayCard />
          </Grid>
        </Grid>
      </Box>
      <FAQSection />
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default SearchResults;
