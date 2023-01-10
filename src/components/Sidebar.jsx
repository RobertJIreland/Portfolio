import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import SouthIcon from '@mui/icons-material/South';


const sidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        icon: <InfoIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Skills',
        icon: <CodeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Works',
        icon: <WorkIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        icon: <PhoneIcon />,
        cName: 'nav-text'
    },
]
export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <Box onMouseEnter={showSidebar}
        sx={[{
            height: '100vh',
            width: 105,
            backgroundColor: 'green',
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease-in',
        }, {
            '&:hover': {
                width: 220,
            }
        }]}>
        <Box
            sx={{
                backgroundColor: 'darkGreen',
                fontSize: '3rem',
                padding: '30px 15px',
                letterSpacing: 1,
                fontWeight: 300,
                textAlign: 'center',
            }}>
            RI
        </Box>
            <List component='nav'
                sx={{
                    padding: '26px',
                }}>
            {sidebarData.map((item, index) => {
                return (
                    <ListItem key={index} className={item.cName}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                )
            })}
        </List>
        <Box>
            <SouthIcon />
        </Box>
    </Box>
  )
}