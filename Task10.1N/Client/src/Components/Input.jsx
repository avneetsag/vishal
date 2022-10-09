import React from 'react'

const Input = (props)=>{
    return <div>
       <input email={props.email} type={props.type} placeholder={props.placeholder} onChange= {props.onChange} value = {props.value}/>
    </div>

}
export default Input