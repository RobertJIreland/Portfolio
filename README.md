# Table of Contents

- [Introduction](#introduction)
- [How To Run Locally](#how-to-run-locally)
- [Designing With Figma](#designing-with-figma)
- [React With MUI](#react-with-mui)

## Introduction

Hello! My name is Robert Ireland. I am a Full-Stack Web Developer and this is my portfolio.
I'm using this readme as a devlog to document the process of building my portfolio website. As such, at the time of writing this introduction, this readme is incomplete and still being added to.

_Click on the title of any section to return to the table of contents_

## [How To Run Locally](#table-of-contents)

## [Designing With Figma](#table-of-contents)

##### 1/11/2023

I am a big fan of figma, so naturally when I'm building a website I like to sketch out how I want it to look first. This helps me get past things like color selection and general themeing. Today I worked on the landing page and decided on going with a purple theme for the website since it matched the background in my picture.

Homepage:
![Homepage in Figma](https://github.com/RobertJIreland/Portfolio/blob/main/readmePictures/Homepage.jpg)

Homepage expanded:
![Homepage expanded in Figma](https://github.com/RobertJIreland/Portfolio/blob/main/readmePictures/Homepage-expanded.jpg)

##### 1/23/2023

I had a bit of designers block when it came to my about page. I am not a fan of writing about myself on top of not really having an inspiring idea. However pushing through this I decided I wanted to make this as a timeline at first. After looking at some example timelines I decided I wanted to tackle this curtain effect ive seen other places. Im not sure if thats what its called but I decided this looked good.

About Me Page:
![About me page in figma](https://github.com/RobertJIreland/Portfolio/blob/main/readmePictures/mui-aboutMe.jpg)

About Me Page Expanded:
![About me Page expanded](https://github.com/RobertJIreland/Portfolio/blob/main/readmePictures/mui-aboutMe-expanded.jpg)

## [React With MUI](#table-of-contents)

##### 1/12/2023

Today I finished my homepage which includes the sidebar. I had done the basic setup stuff before starting this devlog but basically I initialized a new project using npx create-react-app and npm installed material.ui. I prefer using MUI component library. I feel like it's a good balance of functionality and ease of use. The homepage links arent connected yet. I need to look into letting a user pull up a PDF copy of my resume and I need to build another page so I can hook up the links on the sidebar. I'm not worried about setting up the github and linkedin icon links. I also deployed to netlify today without a single issue!

Homepage live on netlify:
![Live screenshot of homepage](https://github.com/RobertJIreland/Portfolio/blob/main/readmePictures/react-mui.jpg)

##### 1/18/2023

I missed posting yesterday because I was under the weather but I did get some stuff done. Todays post will cover yesterdays changes as well as today. I finished adding in the code for each section and also wrote code to make the scroll animation lock to a certain section. I thought that part would've been harder to figure out but it was actually fairly straightforward. I also designed a couple pages but after looking at it I might change the about page. I'll finish the design for the about section tomorrow.

##### 1/23/2023

Getting that shadow effect was a bit of a doozy. The challenge was, I wanted the screen to be bright when there was no mouse on screen or if the user was in the navbar, but dark when the user is hovering and also highlight the specific box the user is in. I realized I would have to track state for the three boxes and also add hover events as well as changing css classnames. Im not sure if this was an elegant solution. Seems like it was the brute force way but It works live and looks good.

About me:
![About me page live](https://github.com/RobertJIreland/Portfolio/blob/main/readmePictures/about-page.jpg)
