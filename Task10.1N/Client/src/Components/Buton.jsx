import React from 'react'
const Buton = (props) =>{
    return <button type = {props.type} onClick = {props.onClick} > {props.text} </button>
}
export default Buton