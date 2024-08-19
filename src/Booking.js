import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const Booking = ({ center, onConfirmBooking }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmBooking = () => {
    // Save the booking information to local storage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      center: center["Hospital Name"],
      date: selectedDate,
      time: selectedSlot,
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Call the parent onConfirmBooking function, if provided
    onConfirmBooking(selectedDate, selectedSlot);
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        backgroundColor: "#F9FAFB",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        {[
          { day: "Today", slots: 11 },
          { day: "Tomorrow", slots: 17 },
          { day: "Fri, 5 May", slots: 18 },
        ].map((date, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant={selectedDate === date.day ? "contained" : "outlined"}
              sx={{
                width: "100%",
                justifyContent: "center",
                borderRadius: "8px",
                padding: "10px",
                color: selectedDate === date.day ? "#FFFFFF" : "#000000",
                backgroundColor:
                  selectedDate === date.day ? "#3b82f6" : "#FFFFFF",
                boxShadow:
                  selectedDate === date.day
                    ? "0px 4px 10px rgba(0, 0, 0, 0.1)"
                    : "none",
                "&:hover": {
                  backgroundColor:
                    selectedDate === date.day ? "#3b82f6" : "#E5E7EB",
                },
              }}
              onClick={() => setSelectedDate(date.day)}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: selectedDate === date.day ? "#FFFFFF" : "#3b82f6",
                  }}
                >
                  {date.day}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedDate === date.day ? "#FFFFFF" : "#6B7280",
                  }}
                >
                  {date.slots} Slots Available
                </Typography>
              </Box>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        {[
          { period: "Morning", times: ["11:30 AM"] },
          {
            period: "Afternoon",
            times: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
          },
          {
            period: "Evening",
            times: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
          },
        ].map((slotGroup, index) => (
          <Grid item xs={12} key={index}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "#3b82f6",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              {slotGroup.period}
            </Typography>
            <Grid container spacing={1}>
              {slotGroup.times.map((slot, i) => (
                <Grid item key={i}>
                  <Button
                    variant={selectedSlot === slot ? "contained" : "outlined"}
                    sx={{
                      borderRadius: "8px",
                      color: selectedSlot === slot ? "#FFFFFF" : "#3b82f6",
                      backgroundColor:
                        selectedSlot === slot ? "#3b82f6" : "#FFFFFF",
                      boxShadow:
                        selectedSlot === slot
                          ? "0px 4px 10px rgba(0, 0, 0, 0.1)"
                          : "none",
                      "&:hover": {
                        backgroundColor:
                          selectedSlot === slot ? "#3b82f6" : "#E5E7EB",
                      },
                    }}
                    onClick={() => handleSlotSelect(slot)}
                  >
                    {slot}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleConfirmBooking}
        disabled={!selectedDate || !selectedSlot}
        sx={{
          marginTop: "20px",
          borderRadius: "8px",
          width: "100%",
          backgroundColor: "#10B981",
          "&:disabled": {
            backgroundColor: "#D1D5DB",
            color: "#9CA3AF",
          },
        }}
      >
        Confirm Appointment
      </Button>
    </Box>
  );
};

export default Booking;
