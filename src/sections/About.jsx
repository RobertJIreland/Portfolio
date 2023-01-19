import React from 'react';
import styles from './about.module.css';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <>
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundColor: 'black',
                scrollSnapAlign: 'center',
            }}>
                About
        </Box>
    </>
  )
}
