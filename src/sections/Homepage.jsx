import React from "react";
import styles from "./homepage.module.css";
import Sidebar from "../components/Sidebar.jsx";
import profilePic from "../static/images/profile-pic.jpeg";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";

export default function Homepage() {
  return (
    <>
      <Sidebar />
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          scrollSnapAlign: "center",
        }}
      >
        <Avatar
          src={profilePic}
          sx={{
            height: 'auto',
            width: '100%',
            maxWidth: 350,
            maxHeight: 350,
            boxShadow:
              "13px 3px 4px #C2B3E6, 26px 6px 4px #DCD2EF, 39px 9px 4px #F3F0FA",
          }}
        />
        <Box
          sx={{
            padding: "0 3vw",
            letterSpacing: 2,
            lineHeight: "1.2",
          }}
        >
          <p className={styles.bio}>Hello! My name is</p>
          <h1>
            <span className={styles.highlight}>Robert</span> Ireland
          </h1>
          <p className={styles.bio}>
            &nbsp;&nbsp;&nbsp;I'm a{" "}
            <span className={styles.highlight}>Full-Stack Web Developer </span>{" "}
            <br /> &nbsp;passionate about creating fun and <br />
            interactive applications on the web.
          </p>
          <Box>
            <Button
              sx={[
                {
                  backgroundColor: "#573597",
                  color: "white",
                  width: '20vw',
                  height: '5vh',
                  maxWidth: 150,
                  maxHeight: 40,
                  borderRadius: 20,
                  marginBottom: "30px",
                },
                {
                  "&:hover": {
                    backgroundColor: "#9175D1",
                    boxShadow: 15,
                  },
                },
              ]}
            >
              Resume
            </Button>
            <LinkedInIcon
              sx={[
                {
                  fontSize: 40,
                  color: "#573597",
                  margin: "0px 90px",
                },
                {
                  "&:hover": {
                    color: "#9175D1",
                  },
                },
              ]}
            />
            <GitHubIcon
              sx={[
                {
                  fontSize: 40,
                  color: "#573597",
                },
                {
                  "&:hover": {
                    color: "#9175D1",
                  },
                },
              ]}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
