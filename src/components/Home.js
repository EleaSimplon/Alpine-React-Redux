import React from 'react';
import ModelCard from './ModelCard';
import NavBarHome from './NavBarHome';


const Home = () => (

	<div>
		<NavBarHome />
		<div className="text-home">
			<h1>Please, select a car : </h1>
		</div>
		<ModelCard />
	</div>
	
)


export default Home;