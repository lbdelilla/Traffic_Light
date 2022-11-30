import React from "react";
import propTypes from "prop-types";


const LightElement = (props) =>{

    return (
        <div onClick={props.turnOn} className={props.extraClass}></div>
       
    );
};

LightElement.propTypes = {
    turnOn: propTypes.func,
    extraClass:propTypes.string
}

export default LightElement;