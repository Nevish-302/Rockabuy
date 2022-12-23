import React from 'react';
import './Button.css'
 
function Button (props){
   return <button class={props.class} {...props}>
    {props.children}
   </button>;
}
 
export default Button