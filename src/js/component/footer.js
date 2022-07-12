import React from "react";

const Footer = props => {
    let amount = props.task.length;
    return (
        amount === 0 ? 
        <li className="list-group-item disabled"><small>No tasks. Add one.</small></li> :
        <li className="list-group-item disabled"><small>{amount}{" "}items left</small></li>
        
    )
}

export default Footer;