import React from 'react';
import './Box.css'
 
function Box (props){
   return <div class={`${props.class} box`}>
    {props.children}
   </div>;
}
 
export default Box;