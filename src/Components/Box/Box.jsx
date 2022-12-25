import React from 'react';
import './Box.css'
 
function Box (props){
   return <div className={`${props.class} box`}>
    {props.children}
   </div>;
}
 
export default Box;