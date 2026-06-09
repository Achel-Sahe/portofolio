import React from 'react'

const SocialCard = ({link, social}) => {
  return (
      <div className='skills-card-wrap'>
        <div className="skills-card">
              <i className={link}></i>
              <h2>{ social }</h2>
        </div>
    </div>
  )
}

export default SocialCard