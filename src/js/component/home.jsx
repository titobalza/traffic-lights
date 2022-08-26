import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
export function Home() {
	const [ color, setColor] = useState("verde");
	return (
		<div className="container">
			<div className="support">
				<div className="semaforo rounded">		
					<div onClick={() => setColor("roja")}
					className= {"luz roja"+((color === "roja") ? "-brillar": "")}>
						
					</div>
					<div onClick={() => setColor("amarilla")} 
					className={"luz amarilla"+((color === "amarilla") ? "-brillar": "")}>
							
					</div>
					<div onClick={() => setColor("verde")}
					className={"luz verde"+((color === "verde") ? "-brillar": "")}>
						
					</div>
				</div>
			</div>
		</div>
	);
} 
export default Home;
