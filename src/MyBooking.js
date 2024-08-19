import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import HospitalIcon from "./resources/hospitalIconcard.png";
import ThumbsUpIcon from "./resources/thumbsupIcon.png";
import OralHealthDayCard from "./OralHealthDayCard";
import DownloadAppSection from "./DownloadSection";
import Footer from "./Footer";

const MyBookings = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <>
      <Box sx={{ padding: "50px", backgroundColor: "#F9FAFB" }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", color: "#3b82f6", fontWeight: "bold" }}
        >
          My Bookings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {bookings.map((booking, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#FFFFFF",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
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
                    {booking.center}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#6B7280", marginBottom: "5px" }}
                  >
                    Date: {booking.date}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6B7280" }}>
                    Time: {booking.time}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#00A500",
                      padding: "2px 8px",
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src={ThumbsUpIcon}
                      alt="Rating"
                      sx={{ width: "20px", height: "20px", marginRight: "5px" }}
                    />
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      5
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <OralHealthDayCard />
          </Grid>
        </Grid>
      </Box>
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default MyBookings;
