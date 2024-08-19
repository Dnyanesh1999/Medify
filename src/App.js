import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme";
import NavBar from "./Navbar";
import Home from "./Home";
import SearchResults from "./SearchResults";

import MyBookings from "./MyBooking";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/bookings" element={<MyBookings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
