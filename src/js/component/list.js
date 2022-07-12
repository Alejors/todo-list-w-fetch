import React from "react";

const List = props => {

    return (
        props.task.map((ele, i) => {
            return (
                <li key={i} className="d-flex list-group-item justify-content-between">
                    <p>{ele.label}</p>
                    <span id={i} className="btn btn-sm btn-outline-danger" onClick={(e) => props.deletetodo(e.target.id)}>X</span>
                </li>
            )
        })
    )
}

export default List;