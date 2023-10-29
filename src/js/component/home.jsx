import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "../component/jumbotron.jsx";
import Navbar from "../component/navbar.jsx";
import Card from "../component/card.jsx";

const myStyle = {
	'background':'lightblue'
}

const Home = () => {
	return (
		<div>
			<div className="navigation">
			<Navbar 
				start="Start Bootstrap" 
				home="Home" 
				about="About" 
				service="Service" 
				contact="Contact"
			/>
			</div>
			<div className="container p-3 mb-2 my-4 border border-2 rounded"
				style={myStyle}
			>
			<Jumbotron 
				title="Welcome to react"
				description="React is the most popular rendering library in the world"
				buttonLabel="Go to the official website"
				buttonURL="https://reactjs.org/" 
			/>
			</div>
			<div className="container text-center">
				<div className="row align-items-center">
					<div className="col my-2">
						<Card 
							title="First Card"
							imageUrl="https://as1.ftcdn.net/v2/jpg/02/18/15/40/1000_F_218154074_DtkUgqkC2SKy64I0NpC9qjNd3U6RJNtM.jpg"
							text="Amazing to do wonderfull apps"
							buttonLabel="Call to action!"
							buttonUrl="https://reactjs.org/" 
						/>
					</div>
					<div className="col my-2">
						<Card 
							title="Second Card"
							imageUrl="https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg"							
							text="Put some description here"
							buttonLabel="Call to action!"
							buttonUrl="https://reactjs.org/" 
						/>
					</div>
					<div className="col my-2">
						<Card 
							title="Third Card"
							imageUrl="https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg"
							text="Put some description here"
							buttonLabel="Call to action!"
							buttonUrl="https://reactjs.org/" 
						/>
					</div>
					<div className="col my-2">
						<Card 
							title="Fourth Card"
							imageUrl="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png"
							text="Put some description here"
							buttonLabel="Call to action!"
							buttonUrl="https://reactjs.org/" 
						/>
					</div>
				</div>
			</div>
			<div className="footer">
				<p className="text-center p-3 mb-2 bg-dark text-white">
					Copyright © Your Website 2023
				</p>
			</div>
		</div>
	);
};

export default Home;
