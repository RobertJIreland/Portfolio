import React from "react";
import Box from "@mui/material/Box";
import { DiReact, DiCss3, DiPython } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiDjango } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Skills() {
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          scrollSnapAlign: "center",
        }}
      >
        <Box
          sx={{
            height: "40%",
            width: 1100,
            marginLeft: "105px",
            borderRadius: 5,
            backgroundColor: "#E0F5E9",
          }}
        >
          <Box
            sx={{
              paddingTop: "5em",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <IconContext.Provider value={{ size: "5em" }}>
              <AiFillHtml5 />
              <DiCss3 />
              <IoLogoJavascript />
              <DiReact />
              <SiNextdotjs />
              <DiPython />
              <SiDjango />
            </IconContext.Provider>
          </Box>
        </Box>
      </Box>
    </>
  );
}
