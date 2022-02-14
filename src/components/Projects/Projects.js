import React from "react"
import styled from "styled-components"
import Project from "./ProjectCard"
import DesignCode from "./images/DesignCode.svg"
import BB8 from "./images/BB8.png"
import TicTacToe from "./images/TicTacToe.png"
import Calculator from "./images/Calculator.png"

const Projects = ({ siteTitle }) => (
  <ProjectGroup>
    <Project
      title="Calculator"
      text="This a Calculator that I have created in React"
      date="June 2021"
      link="https://calculator-cswinton.netlify.app/"
      id="Calculator"
      id2="Calculator2"
      image={Calculator}
    />
    <Project
      title="Tic Tac Toe"
      text="This a copy of the game Tic Tac Toe that has been created as a React App"
      date="June 2021"
      link="https://tic-tac-toe-cswinton.netlify.app/"
      id="TicTacToe"
      id2="TicTacToe2"
      image={TicTacToe}
    />
    <Project
      title="BB8"
      text="This is a small app that renders BB8 which you can move by moving your mouse around the screen *Desktop Only*"
      date="May 2021"
      link="https://bb8.netlify.app/"
      id="BB8"
      id2="BB82"
      image={BB8}
    />
    {/* <Project
      title="Academic School Search"
      text="As part of a task for Leeds Beckett I was asked to create an Academic Search, this is still an earyly prototybe so this is not in full production as of yet"
      date="March 2021"
      link="https://academic-search-lbu.netlify.app/"
      id="Academic"
      emoji="🔍"
    /> */}
    <Project
      title="Open Weather Map"
      text="I created this weather app that allows the user to search location that's fed to an API that fetches the data on the locations weather"
      date="Febuary 2021"
      link="https://openweathermap-cts.netlify.app/"
      id="Weather"
      emoji="☁️"
    />
    <Project
      title="Salad Builder"
      text="I made this Salad Builder that allows the user to build there own salad with the ingredients provided and on their selection, a dynamic list will pop up with the user's ingredients they have picked out"
      date="January 2021"
      link="https://salad-maker.netlify.app/"
      id="Salad"
      emoji="🥗"
    />
    <Project
      title="Food Stall"
      text="This a little React Project that I made that allows the user to add products to a basket which will dynamically tell the user the number of items they've added and the total amount they have put in their cart"
      date="January 2021"
      link="https://foodstallapp.netlify.app/"
      id="FoodStall"
      emoji="🍦"
    />
    <Project
      title="Design + Code 4"
      text="This site was created by myself when following a React Totorial from MengTo the creator of Design + Code"
      date="December 2020"
      link="https://designcode4project.netlify.app/"
      image={DesignCode}
      id="DesignCode"
      id2="DesignCode2"
      alt="Design+Code"
    />
  </ProjectGroup>
)

export default Projects

const ProjectGroup = styled.div`
  display: block;
  justify-items: center;
`
