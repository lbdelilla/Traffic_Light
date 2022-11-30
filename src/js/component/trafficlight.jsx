import { string } from "prop-types";
import React, {useState} from "react";
import LightElement from "./lightelement.jsx";

const TrafficLight = () => {

    const [color, lightOn] = useState("");


    return (
<div className="text-center">
			<h1 className="text-center mt-5">TRAFFIC LIGHT</h1>
				<div className="semaforo">
                <LightElement
                    turnOn={() => {color === "red" ? lightOn(""): lightOn("red")}}
                    extraClass={"red light " + (color === "red" ? "selected" : "")}
                    />
                    <LightElement
                    turnOn={() => {color === "yellow" ? lightOn(""): lightOn("yellow")}}
                    extraClass={"yellow light " + (color === "yellow" ? "selected" : "")}
                    />
                     <LightElement
                    turnOn={() => {color === "green" ? lightOn(""): lightOn("green")}}
                    extraClass={"green light " + (color === "green" ? "selected" : "")}
                    />
				</div>		
			<p>	Made by Lulu Belén with ❤️!	</p>
		</div>

    );
};

TrafficLight.propTypes = {
    extraClass: string,
}

export default TrafficLight;