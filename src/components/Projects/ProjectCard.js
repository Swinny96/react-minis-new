import React from "react"
import styled from "styled-components"

const Project = props => (
  <ProjectObject>
    <ProjectConetents>
      <Title href={props.link} target="_blank" rel="noreferrer">
        {props.title}
      </Title>
      <Text>{props.text}.</Text>
      <Text>{props.para2}</Text>
      <Status>{props.status}</Status>
      <Date>{props.date}</Date>
    </ProjectConetents>
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="Project-Card"
      id={props.id}
      aria-label={props.alt}
    >
      <ProjectImage src={props.image} id={props.id2} alt={props.alt} />
      <ProjectAltImage aria-label={props.title} role="img">
        {props.emoji}
      </ProjectAltImage>
    </a>
  </ProjectObject>
)

export default Project

const ProjectObject = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  max-width: 1080px;
  width: 80%;

  @media (max-width: 700px) {
    flex-direction: column-reverse !important;

    .Project-Card {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  .Project-Card {
    min-width: 50%;
    height: 320px;
    border-radius: 12px;
    border: 6px solid;
    border-color: #61dbfb;
    background: #1a214d;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }

  a .Project-Card {
    cursor: pointer;
  }

  .Project-Card img {
    max-width: 320px;
    border-radius: 6px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .Project-Card:hover {
    box-shadow: 0 10px 20px rgb(97, 219, 251, 0.6);
  }

  .Project-Card:hover img {
    transform: scale(1.2, 1.2);
  }
  .Project-Card:hover span {
    transform: scale(1.2, 1.2);
  }

  :nth-child(even) {
    flex-direction: row-reverse;
  }
`

const ProjectConetents = styled.div`
  width: 50%;
  margin: 0px 36px;

  @media (max-width: 700px) {
    width: 100% !important;
    margin: 6px;
  }
`

const Title = styled.a`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  transition: 0.8s;

  :hover {
    transform: scale(1, 1.1);
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    text-align: center;
  }
`
const Text = styled.p``
const Status = styled.em``
const Date = styled.p``
const ProjectImage = styled.img`
`
const ProjectAltImage = styled.span`
  font-size: 200px;
  transition: 0.3s;
`
