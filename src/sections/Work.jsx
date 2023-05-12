import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Work() {
  return (
    <>
      <Container
        sx={[
          {
            height: "100vh",
            scrollSnapAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Container
          sx={{
            marginLeft: "8.75vw",
            height: "90%",
            width: "100vw",
            backgroundColor: "#E0F5E9",
            boxSizing: "border-box",
            boxShadow: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              height: "400px",
              boxShadow: 2,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "gray",
              margin: 2,
            }}
          >
            <img
              src="https://placeimg.com/300/200/tech"
              alt="Project"
              style={{
                objectFit: "cover",
                height: "200px",
                margin: "5px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h5" gutterBottom>
                Project Title
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                Project description goes here.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/username/repo"
                  target="_blank"
                  rel="noopener"
                >
                  Repo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://example.com"
                  target="_blank"
                  rel="noopener"
                >
                  Live
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              height: "400px",
              boxShadow: 2,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "gray",
              margin: 2,
            }}
          >
            <img
              src="https://placeimg.com/300/200/tech"
              alt="Project"
              style={{
                objectFit: "cover",
                height: "200px",
                margin: "5px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h5" gutterBottom>
                Project Title
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                Project description goes here.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/username/repo"
                  target="_blank"
                  rel="noopener"
                >
                  Repo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://example.com"
                  target="_blank"
                  rel="noopener"
                >
                  Live
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              height: "400px",
              boxShadow: 2,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "gray",
              margin: 2,
            }}
          >
            <img
              src="https://placeimg.com/300/200/tech"
              alt="Project"
              style={{
                objectFit: "cover",
                height: "200px",
                margin: "5px",
                borderRadius: "8px",
              }}
            />
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h5" gutterBottom>
                Project Title
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                Project description goes here.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/username/repo"
                  target="_blank"
                  rel="noopener"
                >
                  Repo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://example.com"
                  target="_blank"
                  rel="noopener"
                >
                  Live
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}
