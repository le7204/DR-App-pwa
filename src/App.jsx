import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import Splash from "./components/utility/Splash";
import GrowItemsList from "./components/GrowItem/GrowItemsList";
import Sidebar from "./components/utility/Sidebar";

import React, { useState } from "react";
import GrowItemPage from "./components/GrowItem/GrowItemPage";
import SalesItemsList from "./components/Sales/SalesItemsList";
import SalesItemPage from "./components/Sales/SalesItemPage";
import PrestigeItemsList from "./components/Prestige/PrestigeItemsList";
import PrestigeItemPage from "./components/Prestige/PrestigeItemPage";
import OffenseItemPage from "./components/Offense/OffenseItemPage";
import OffenseItemsList from "./components/Offense/OffenseItemsList";
import DefenseItemsList from "./components/Defense/DefenseItemsList";
import DefenseItemPage from "./components/Defense/DefenseItemPage";
import HousingItemsList from "./components/Housing/HousingItemsList";
import HousingItemPage from "./components/Housing/HousingItemPage";
import CrewItemsList from "./components/Crew/CrewItemsList";
import CrewItemPage from "./components/Crew/CrewItemPage";

const App = () => {
	const [state, setState] = useState({
		leftPanel: "closed",
		user: {
			name: "ClamHamma",
			cash: 100
		}
	});

	const arrowClick = () => {
		if (state.leftPanel === "open")
			setState({ ...state, leftPanel: "closed" });
		else setState({ ...state, leftPanel: "open" });
	};
	return (
		<div className='app'>
			<Sidebar open={state.leftPanel === "open"} arrowClick={arrowClick} />
			<div className={state.leftPanel === "open" ? 'main-screen panel-open' : 'main-screen panel-closed'} >
				<Routes>
					<Route path='/' element={<Splash />} />
					<Route
						path='growitems'
						element={<GrowItemsList />}
					/>
					<Route
						path='/growitem/:GrowItem'
						element={<GrowItemPage />}
					/>
					<Route
						path='salesitems'
						element={<SalesItemsList />}
					/>

					<Route
						path='/salesitem/:SalesItem'
						element={<SalesItemPage />}
					/>

					<Route
						path='prestigeitems'
						element={<PrestigeItemsList />}
					/>
					<Route
						path='/prestigeitem/:PrestigeItem'
						element={<PrestigeItemPage />}
					/>
					<Route
						path='offenseitems'
						element={<OffenseItemsList />}
					/>
					<Route
						path='/offenseitem/:OffenseItem'
						element={<OffenseItemPage />}
					/>
					<Route
						path='defenseitems'
						element={<DefenseItemsList />}
					/>
					<Route
						path='/defenseitem/:DefenseItem'
						element={<DefenseItemPage />}
					/>
					<Route
						path='housingitems'
						element={<HousingItemsList />}
					/>
					<Route
						path='/housingitem/:HousingItem'
						element={<HousingItemPage />}
					/>
					<Route
						path='crewitems'
						element={<CrewItemsList />}
					/>
					<Route
						path='/crewitem/:CrewItem'
						element={<CrewItemPage />}
					/>

				</Routes>
			</div>
		</div >
	);
};

export default App;