import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styles from './about.module.css';

export default function About() {
  const [sectionOne, setSectionOne] = useState(false);
  console.log('section one' , sectionOne)

  const [sectionTwo, setSectionTwo] = useState(false);
  console.log('section two' , sectionTwo)

  const [sectionThree, setSectionThree] = useState(false);
  console.log('section three' , sectionThree)

  return (
    <>
        <Box
        sx={[{
          height: '100vh',
          width: '100%',
          scrollSnapAlign: 'center',
          backgroundColor: 'black',
          },{
            '&:hover': {
              backgroundColor: '',
            }
          }]}>
          <Box
          onMouseEnter={()=> setSectionOne(true)}
          onMouseLeave={()=> setSectionOne(false)}
          className={!sectionOne & !sectionTwo & !sectionThree ? styles.panelUnfocused : styles.panelFocus}
          sx={[{
            marginLeft: '105px',
            height: '33.33%',
            backgroundColor: '#9FA0FF',
          },{
            '&:hover': {
              opacity: 1,
            }
          }]}>
            <h2>
              From Cooking,
            </h2>
            <p>
            I started my career journey at 19 years old with a quick decision to move to New Orleans, LA and pursue a passion for cooking.
            Some of my highest accomplishments came during this time including working along side renowned chefs, becoming an offsite representative, and meeting numerous famous people. Some of the restaurants I worked at included Otra Vez, Seaworthy, and Josephine Estelle as well as staging for restaurants like Saba and Turkey and the Wolf.
            </p>
          </Box>
          <Box
          onMouseEnter={()=> setSectionTwo(true)}
          onMouseLeave={()=> setSectionTwo(false)}
          className={!sectionOne & !sectionTwo & !sectionThree ? styles.panelUnfocused : styles.panelFocus}
          sx={[{
            marginLeft: '105px',
            height: '33.33%',
            backgroundColor: '#8895B3',
          },{
            '&:hover': {
              opacity: 1,
            }
          }]}>
            <h2>
              To Coding,
            </h2>
            <p>
            With news of my moms declining health and a growing feeling of homesickness, I decided it was time for me to move back home to Four Oaks, NC. Quickly I realized that in order to work at the quality of restaurants I wanted to be in, I would have to drive an hour, sometimes more, in order to get there and when some nights go on until 1 - 2 am, getting home at 3 am, and turning around to be back at 7 am, it was clear it was time for a change. I decided to attend Momentum Learning of Durham, NC after seeing the success it brought some of my close friends
            </p>
          </Box>
          <Box
          onMouseEnter={()=> setSectionThree(true)}
          onMouseLeave={()=> setSectionThree(false)}
          className={!sectionOne & !sectionTwo & !sectionThree ? styles.panelUnfocused : styles.panelFocus}
          sx={[{
            marginLeft: '105px',
            height: '33.33%',
            backgroundColor: '#8E94F2',
          }, {
            '&:hover': {
              opacity: 1,
            }
          }]}>
            <h2>
              And Beyond!
            </h2>
            <p>
            Attending and then graduating from Momentum Learning was by far one of the best decisions I’ve ever made. I’ve found a deep passion for problem solving and design as well as discovering ways of learning never taught to me before in regular schooling. Having a Full-Stack Engineering certificate means I can work on both front-end and back-end as well as the in-between parts but I find my true love falls in the design and front-end parts of a website with React and Material.UI being my go-to tools.
            </p>
          </Box>  
        </Box>
    </>
  )
}
