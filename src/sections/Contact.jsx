import React, { useState } from "react";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
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
          <Typography variant="h3">Contact Me</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          ></Snackbar>
        </Container>
      </Container>
    </>
  );
}
