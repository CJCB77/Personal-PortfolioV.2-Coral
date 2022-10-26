import React from 'react'
import SectionDivider from '../UtilityComponents/SectionDivider'
import './Technologies.css'
//Hooks
import { useInterventionObserver } from '../../CustomHooks/useInterventionObserver'
//Icons
import Html from "../../assets/skills/html.png"
import Javascript from "../../assets/skills/javascript.png"
import Css3 from "../../assets/skills/css3.png"
import Typescript from "../../assets/skills/typescript.png"
import ReactIcon from "../../assets/skills/react.png"
import Python from "../../assets/skills/python.png"
import Node from "../../assets/skills/nodejs.png"
import Java from "../../assets/skills/java.png"
import Mongo from "../../assets/skills/mongo.png"
import Django from "../../assets/skills/django.png"
import Postgres from "../../assets/skills/postgres.png"
import Git from "../../assets/skills/git.png"
import Github from "../../assets/skills/github.png"
import Figma from "../../assets/skills/figma.png"
import Postman from "../../assets/skills/postman.png"
//Components
import { SkillCard } from './SkillCard'
import {useSpring, animated} from 'react-spring'


export const Technologies = () => {

  const skillsList = [
    {"name":"HTML5", "image":Html}, 
    {"name":"CSS3", "image":Css3}, 
    {"name":"Javascript", "image":Javascript}, 
    {"name":"Typescript", "image":Typescript},
    {"name":"React", "image":ReactIcon},
    {"name":"NodeJs", "image":Node},
    {"name":"Python", "image":Python},
    {"name":"Django", "image":Django},
    {"name":"Java", "image":Java},
    {"name":"PostgreSQL", "image":Postgres},
    {"name":"MongoDB", "image":Mongo},
    {"name":"Git", "image":Git},
    {"name":"Github", "image":Github},
    {"name":"Figma", "image":Figma},
    {"name":"Postman", "image":Postman}
  ]
  
  const cards = skillsList.map((skill, index) => {
    return <SkillCard key={index} name={skill.name} image={skill.image} />
  })
  
  //Intersection observer for fade in animation
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const dataRef = useInterventionObserver(triggerRef, { freezeOnceVisible: true,threshold: 0.1 });
  
  const fadeInSpring = useSpring({
    from: {opacity: 0},
    to: {opacity: dataRef?.isIntersecting ? 1 : 0},
    config: {duration: 500}
  })

  return (
    <section className='skills' id="skills">
      <SectionDivider section='Skills and Technologies' />
      <animated.div ref={triggerRef} style={fadeInSpring} className='skills__container'>
        {cards}
      </animated.div>
    </section>
  )
}
