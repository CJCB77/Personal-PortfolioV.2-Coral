import React from 'react'

interface SkillCardProps {
  name: string
  image: any
}

export const SkillCard = ({image,name}:SkillCardProps) => {

  return (
    <div  className='skills__card'>
      <img src={image} alt="html icon" className='card__img' />
      <h3 className='card__title'>{name}</h3>
    </div>  
  )
}
