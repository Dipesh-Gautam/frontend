import react from "react";


const Button = (props) =>{
    return <a href={props.link} target="_blank"><button className="button">{props.name}</button></a>
//props makes static page
}

export default Button;