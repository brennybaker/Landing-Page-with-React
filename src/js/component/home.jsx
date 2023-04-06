import React from "react";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
		const Home =() => {
			return (
				<><div>
					<Navbar />
					<Jumbotron />
					<div style = {{display: 'flex', flexDirection: 'row', marginTop:"3rem", marginLeft: "19rem",marginRight: "20rem"}}>
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div></>
			);
		};

export default Home;
