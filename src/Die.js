import React from "react";

export default function Die(props){
    return (
    <div style={{backgroundColor: props.isHeld ? "aqua" : "azure"}} className="tenzies" key={props.id}  onClick={props.handleClick} >
        {props.value} 
    </div>
)}