import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import profilePic from './static/images/profile-pic.jpeg';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Homepage() {
  return (
    <>
      <Sidebar />
      <Box 
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          backgroundColor: '#F7FFF6',
        }}>
        <Avatar 
          src={profilePic}
          sx={{
            height: 350, 
            width: 350,
            }} />
        <Box 
          sx={{
            padding:'0 15px',
            letterSpacing: 1,
            lineHeight: '1.2',
            fontSize: '1rem',
          }}>
          <p>Hello! My name is</p>
          <h1>Robert Ireland</h1>
          <Box 
            sx={{
              minWidth: 250,
              fontSize: '1rem',
            }}>
            <p>I'm a <span>Full-Stack Web Developer</span> passionate about creating fun and interactive applications on the web.</p>
          </Box>
          <Button>Resume</Button>
          <LinkedInIcon />
          <GitHubIcon />
        </Box>
      </Box>
    </>  
  )
}