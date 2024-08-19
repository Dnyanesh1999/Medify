import React from "react";
import { Box, Grid, Typography } from "@mui/material";

// Import your news images
import NewsImage from "./resources/news.png"; // Replace with actual paths
import DocImg from "./resources/doctor2-80x80.jpg.png";

const newsArticles = [
  {
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    date: "March 31, 2022",
    category: "Medical",
    author: "Rebecca Lee",
    image: NewsImage,
  },
  {
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    date: "March 31, 2022",
    category: "Medical",
    author: "Rebecca Lee",
    image: NewsImage,
  },
  {
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    date: "March 31, 2022",
    category: "Medical",
    author: "Rebecca Lee",
    image: NewsImage,
  },
  // Add more articles if needed
];

const LatestNewsSection = () => {
  return (
    <Box sx={{ maxWidth: "80%", margin: "0 auto", padding: "40px 0" }}>
      <Typography
        variant="subtitle1"
        sx={{ color: "#3b82f6", textAlign: "center", marginBottom: "10px" }}
      >
        Blog & News
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold" }}
      >
        Read Our Latest News
      </Typography>
      <Grid container spacing={4}>
        {newsArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={article.image}
                alt={article.title}
                sx={{ width: "100%", height: "auto" }}
              />
              <Box sx={{ padding: "20px" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#3b82f6", marginBottom: "5px" }}
                >
                  {article.category} &nbsp;|&nbsp; {article.date}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "10px", fontWeight: "bold" }}
                >
                  {article.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={DocImg} // Replace with the author's image path
                    alt={article.author}
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <Typography variant="body2">{article.author}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNewsSection;
