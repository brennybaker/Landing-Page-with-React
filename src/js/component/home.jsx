import React from "react";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";


//create your first component
		const Home =() => {
			return (
				<div>
					<Navbar />
					<Jumbotron />
				<div className = "row" style={{margin:"1em",padding:"none"}}>
						<Card title ={"Title"} text ={"This is a unique sentence showcasing that every card has different string values! Feel the mattress tense beneath me like the muscle of non-sleepy. Feathers flexing will defeat me and it vexes me completely."}/>
						<Card title ={"Another Title"} text ={"This is ANOTHER unique sentence showcasing that every card has different string values!! And the hexes heat covertly like a slow low-flying turkey, like a Texan drying jerk, but his meaty mitts can't hurt me!"}/>
						<Card title ={"Another..Nother Title"} text ={"This is another..nother unique sentence showcasing that every card has different string values!!! With my steely will compounded in a mighty mound that's hounded by the snap your steel string sounded just before your snores unwound it."}/>
						<Card title ={"Yet Another Title"} text ={"This is yet another unique sentence showcasing that every card has a different string value!!!! And in store are dreams so daring that the night can't stop from staring and I'll swim sweetly as a herring through the ether, not despairing."}/>
					</div>
				</div>	
			);
		};

export default Home;