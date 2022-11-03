import { lazy, Suspense } from 'react'
import SectionDivider from '../UtilityComponents/SectionDivider'
import './Projects.css'
//Projects Images mobile
import projectWaterMeter from '../../assets/images/projectWaterMeter.png'
import inventoryProject from '../../assets/images/inventory.png'
import fashionProject from '../../assets/images/fashion-store.png'
import animalProject from '../../assets/images/animal-rescue.png'
//Projects Images desktop
import projectWaterMeterDesktop from '../../assets/images/projectWater-medium.png'
import inventoryProjectDesktop from '../../assets/images/inventory-medium.png'
import fashionProjectDesktop from '../../assets/images/fashion-medium.png'
import animalProjectDesktop from '../../assets/images/animal-medium.png'
//Skill icons
import reactIcon from '../../assets/skills/react.png'
import express from '../../assets/skills/express.png'
import node from '../../assets/skills/nodejs.png'
import postgres from '../../assets/skills/postgres.png'
import kotlin from '../../assets/skills/kotlin.png'
import aws from '../../assets/skills/aws.png'
import typescript from '../../assets/skills/typescript.png'
import django from '../../assets/skills/django.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css3.png'
import javascript from '../../assets/skills/javascript.png'
import bootstrap from '../../assets/skills/bootstrap.png'
//Components
const Project = lazy(() => import ('./Project'));

const Projects = () => {

  return (
    <section className='projects' id="projects">
      <SectionDivider section='Projects'/>
      <div className='projects__container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Project 
            title={"Water Meter Reader and Service Billing"} 
            description={`Mobile application that extracts the reading of household analog 
              water meters with OCR, along with a web administration panel for billing clients 
              monthly consumption.`}
            imgMobile={projectWaterMeter}
            imgDesktop={projectWaterMeterDesktop}
            stack={[reactIcon, express, node, postgres, kotlin, aws]}
            path='/energy-meter-ocr'
          />

          <Project 
            title={"Pharmacy Inventory System for Non Profit Tacita Caliente"} 
            description={`Web inventory management system developed for tracking pharmacy 
              supplies like medicine in the non profit organization Tacita Caliente.`}
            imgMobile={inventoryProject}
            imgDesktop={inventoryProjectDesktop}
            stack={[reactIcon, express, node, postgres,typescript]}
            path='/inventory-system'
          />

          <Project 
            title={"Fashion Store Ecommerce"} 
            description={`Website for a men’s clothing online store, great UI design, different 
              categories and filtering for clothes, shopping cart integration and payment. `}
            imgMobile={fashionProject}
            imgDesktop={fashionProjectDesktop}
            stack={[reactIcon, typescript, django, postgres]}
            path='/online-store'
          />

          <Project 
            title={"Animal Rescue website"} 
            description={`Beautiful website for an animal shelter or rescue type NPO, displays info, showcase 
              pets for adoption to potential foster family and accepts donations. `}
            imgMobile={animalProject}
            imgDesktop={animalProjectDesktop}
            stack={[html,css,javascript,bootstrap]}
            path='/animal-rescue'
          />
        </Suspense>
      </div>
    </section>
  )
}

export default Projects