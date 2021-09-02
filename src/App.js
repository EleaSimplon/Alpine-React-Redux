import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Recap from './components/Recap';
import ChangeColor from "./components/ChangeColor";
import ChangeRim from "./components/ChangeRims";
import ChangeSaddlery from "./components/ChangeSaddlery";
import ChangeEquipment from "./components/ChangeEquipments";
import ChangeAccessories from "./components/ChangeAccessories";
import CarouselModel from './components/Carousel';
import NavBarHome from './components/NavBarHome';


export default function App() {
  return (
    <Router>
      <div>
        <Switch>

			<Route path="/colors">
				<NavBarHome />
				<CarouselModel />
				<ChangeColor />
			</Route>

			<Route path="/rims">
				<NavBarHome />
				<CarouselModel />
				<ChangeRim />
			</Route>

			<Route path="/saddlery">
				<NavBarHome />
				<CarouselModel />
				<ChangeSaddlery />
			</Route>

			<Route path="/equipments">
				<NavBarHome />
				<CarouselModel />
				<ChangeEquipment />
			</Route>

			<Route path="/accessories">
				<NavBarHome />
				<CarouselModel />
				<ChangeAccessories />
			</Route>

			<Route path="/recap">
				<NavBarHome />
				<Recap />
			</Route>
			
			<Route path="/">
				<Home />
			</Route>

        </Switch>
      </div>
    </Router>
  );
}