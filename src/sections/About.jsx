import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import styles from "./about.module.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function About() {
  const [sectionOne, setSectionOne] = useState(false);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const boxRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (boxRef.current.scrollHeight > boxRef.current.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

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
        <Box
          onMouseEnter={() => setSectionOne(true)}
          onMouseLeave={() => setSectionOne(false)}
          ref={boxRef}
          className={
            !sectionOne & !sectionTwo & !sectionThree
              ? styles.panelUnfocused
              : styles.panelFocus
          }
          sx={[
            {
              height: "80%",
              width: "30%",
              marginLeft: "8.75vw",
              backgroundColor: "#E0F5E9",
              boxSizing: "border-box",
              boxShadow: 2,
              letterSpacing: 2,
              lineHeight: "1.2",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            {
              "&:hover": {
                opacity: 1,
              },
            },
          ]}
        >
          <h2>From Cooking,</h2>
          {showMore ? (
            <p>
              At the young age of 19, I made a bold decision to follow my
              passion for cooking and move to New Orleans, LA to start my career
              journey. During this time, I had the privilege of working
              alongside some of the most renowned chefs in the industry, which
              allowed me to hone my skills and develop my own unique approach to
              cooking. Not only did I become an offsite representative for some
              of the top restaurants in the area, but I also had the opportunity
              to rub shoulders with numerous famous people.
            </p>
          ) : (
            <p>
              At the young age of 19, I made a bold decision to follow my
              passion for cooking and move to New Orleans, LA to start my career
              journey. During this time, I had the privilege of working
              alongside some of the most renowned chefs in the industry, which
              allowed me to hone my skills and develop my own unique approach to
              cooking. Not only did I become an offsite representative for some
              of the top restaurants in the area, but I also had the opportunity
              to rub shoulders with numerous famous people. Some of the
              restaurants I worked at during my time in New Orleans included
              Otra Vez, Seaworthy, and Josephine Estelle, and I also had the
              chance to stage for popular establishments such as Saba and Turkey
              and the Wolf.
            </p>
          )}
          {isOverflowing && (
            <Button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </Button>
          )}
        </Box>
        <Box
          onMouseEnter={() => setSectionTwo(true)}
          onMouseLeave={() => setSectionTwo(false)}
          className={
            !sectionOne & !sectionTwo & !sectionThree
              ? styles.panelUnfocused
              : styles.panelFocus
          }
          sx={[
            {
              height: "80%",
              width: "30%",
              marginLeft: "8.75vw",
              backgroundColor: "#E0F5E9",
              letterSpacing: 2,
              lineHeight: "1.2",
              boxSizing: "border-box",
              boxShadow: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            {
              "&:hover": {
                opacity: 1,
              },
            },
          ]}
        >
          <h2>To Coding,</h2>
          <p>
            After spending several years working in some of the top restaurants
            in New Orleans, I made the difficult decision to move back home to
            Four Oaks, NC due to my mother's declining health and a growing
            sense of homesickness. However, I quickly realized that the local
            restaurant scene did not offer the same level of quality and
            challenge that I had become accustomed to. Despite having to endure
            long and grueling hours that often required me to drive for an hour
            or more, work late into the night, and return to work early in the
            morning, I was determined to find a way to pursue my passion for
            cooking. That's when I discovered Momentum Learning of Durham, NC,
            and after seeing the success that some of my close friends had
            achieved through the program, I knew it was the right choice for me.
          </p>
        </Box>
        <Box
          onMouseEnter={() => setSectionThree(true)}
          onMouseLeave={() => setSectionThree(false)}
          className={
            !sectionOne & !sectionTwo & !sectionThree
              ? styles.panelUnfocused
              : styles.panelFocus
          }
          sx={[
            {
              height: "80%",
              width: "30%",
              marginLeft: "8.75vw",
              backgroundColor: "#E0F5E9",
              letterSpacing: 2,
              lineHeight: "1.2",
              boxSizing: "border-box",
              boxShadow: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            {
              "&:hover": {
                opacity: 1,
              },
            },
          ]}
        >
          <h2>And Beyond!</h2>
          <p>
            Completing the Full-Stack Engineering program at Momentum Learning
            was truly one of the most rewarding experiences of my career. Not
            only did it equip me with the technical skills to work on both
            front-end and back-end development, but it also helped me discover a
            deep passion for problem-solving and design. I was particularly
            impressed with the program's emphasis on innovative learning methods
            that I had never encountered before in traditional schooling. While
            I am proficient in all aspects of web development, including
            back-end technologies, I find that my true passion lies in designing
            and developing the user interface of websites. In this regard, I
            prefer to work with React and Material.UI, as I believe they offer
            the most efficient and user-friendly tools for this purpose.
          </p>
        </Box>
      </Container>
    </>
  );
}
