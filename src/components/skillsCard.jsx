import React from 'react'

const SkillsCard = ({img, language}) => {
  return (
      <div className='skills-card-wrap'>
        <div className="skills-card">
              <img src={img} alt="" />
              <h2>{ language }</h2>
        </div>
    </div>
  )
}

export default SkillsCard