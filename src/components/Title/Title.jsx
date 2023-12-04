import React from 'react'
import '../Title/title.css'

const Title = (props) => {
  return (
    <h1 className='title'>{props.greeting}</h1>
  )
}

export default Title