import React from "react";
import { Box } from "@mui/material";
import FooterImage from "./resources/footer.png"; // Replace with the actual path to the footer image

const Footer = () => {
  return (
    <Box
      component="img"
      src={FooterImage}
      alt="Footer"
      sx={{
        width: "100%", // Ensure the footer spans the full width of the page
        marginTop: "-100px",
        position: "relative",
        zIndex: 3,
      }}
    />
  );
};

export default Footer;
