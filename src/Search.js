import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Search = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((response) => setStates(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    axios
      .get(`https://meddata-backend.onrender.com/cities/${e.target.value}`)
      .then((response) => setCities(response.data))
      .catch((error) => console.error(error));
  };

  const handleSearch = () => {
    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={4} md={3}>
        <TextField
          select
          label="State"
          value={selectedState}
          onChange={handleStateChange}
          fullWidth
          SelectProps={{ native: true }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
            },
          }}
        >
          <option value="" />
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <TextField
          select
          label="City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          fullWidth
          SelectProps={{ native: true }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
            },
          }}
        >
          <option value="" />
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSearch}
          style={{
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            height: "56px",
            borderRadius: "8px",
          }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
