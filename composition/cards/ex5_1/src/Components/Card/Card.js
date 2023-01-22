import React from 'react'

export const Card = ({ children, ...rest }) => {
  const child = children ? children : null
  const { title, namebth, paragraph } = rest

  return (
    <div className="card-wrapper">
      {child}
      <div className="card-content">
        <div className="card-title">{title}</div>
        <p>{paragraph}</p>
        <button className="card-button">{namebth}</button>
      </div>
    </div>
  )
}

export default Card