import React from 'react'
import './Card.css'

const Card = (props) =>
{
    return <div class = "row" >
    <ul className='cards__items'>
    <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>
    <p>{props.position}</p>
    </ul>
    </div>
    
}

export default Card

