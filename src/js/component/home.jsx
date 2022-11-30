import React from "react";
import LightElement from "../component/lightelement.jsx"
import PropTypes from "prop-types";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TRAFFIC LIGHT</h1>
				<div className="semaforo">
					<LightElement clase="circle light-green"/>
					<LightElement clase="circle light-yellow"/>
					<LightElement clase="circle light-red"/>
				</div>		
			<p>	Made by Lulu Belén with ❤️!	</p>
		</div>
	);
};

export default Home;
