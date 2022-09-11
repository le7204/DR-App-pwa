import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Splash } from "./components/utility/Splash";
import Banner from "./components/utility/Banner";
import Sidebar from "./components/utility/Sidebar";

import GrowItemsList from "./components/GrowItem/GrowItemsList";
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
import CrewItemsList from "./components/Cartel/CartelItemsList";
import CartelItemPage from "./components/Cartel/CartelItemPage";
import PlayerMain from "./components/Players/PlayerMain";
import MailMain from "./components/Mail/MailMain";


import { fireStoreDb } from './components/auth/firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const App = () => {
	const [state, setState] = useState({
		leftPanel: "closed",
		user: false
	});
	const [playerData, setPlayerData] = useState({ selected: false });
	const setAppUser = (newUser) => {
		let authUser = newUser.multiFactor.user;
		setState({ ...state, user: authUser });

		const playerQuery = query(collection(fireStoreDb, "users"), where("UID", "==", authUser.uid));
		const userObserver = onSnapshot(playerQuery, (querySnapshot) => {
			console.log(querySnapshot);
			let characters = [];
			querySnapshot.forEach((doc) => {
				characters.push(doc.data());
			});
			console.log("characters:", characters);
			if (characters.length > 1) {
				console.error("TOO Many users returned");
			} else {
				let data = characters[0];
				setPlayerData({ ...playerData, full: data });
			}
		});
	};
	const setSelectedCharacter = (char) => {
		console.log("set selected char:", char);
		setPlayerData({ ...playerData, selected: char });
	};
	const arrowClick = () => {
		if (state.leftPanel === "open")
			setState({ ...state, leftPanel: "closed" });
		else setState({ ...state, leftPanel: "open" });
	};
	return (
		<div className='app'>
			<Sidebar open={state.leftPanel === "open"} arrowClick={arrowClick} />
			{state.user && <Banner selectedChar={playerData.selected} user={state.user} />}
			<div className={state.leftPanel === "open" ? 'main-screen panel-open' : 'main-screen panel-closed'} >
				{!state.user ? <Splash setAppUser={setAppUser} />
					:
					<Routes>
						<Route path='/' element={<Splash setAppUser={setAppUser} />} />
						<Route index element={<Splash setAppUser={setAppUser} />} />
						<Route path='GROW' element={<GrowItemsList />} />
						<Route path='/growitem/:GrowItem' element={<GrowItemPage />} />

						<Route path='SALES' element={<SalesItemsList />} />
						<Route path='/salesitem/:SalesItem' element={<SalesItemPage />} />

						<Route path='PRESTIGE' element={<PrestigeItemsList />} />
						<Route path='/prestigeitem/:PrestigeItem' element={<PrestigeItemPage />} />

						<Route path='OFFENSE' element={<OffenseItemsList />} />
						<Route path='/offenseitem/:OffenseItem' element={<OffenseItemPage />} />

						<Route path='DEFENSE' element={<DefenseItemsList />} />
						<Route path='/defenseitem/:DefenseItem' element={<DefenseItemPage />} />

						<Route path='HOUSING' element={<HousingItemsList />} />
						<Route path='/housingitem/:HousingItem' element={<HousingItemPage />} />

						<Route path='CARTEL' element={<CrewItemsList />} />
						<Route path='/cartelItem/:CartelItem' element={<CartelItemPage />} />

						<Route path='PLAYER' element={<PlayerMain playerName={state.user.name} setSelectedCharacter={setSelectedCharacter} playerData={playerData} />} />
						{/* <Route path='/player/:playerId' element={<IndividualPlayerPage />} /> */}


						<Route path='MAIL' element={<MailMain />} />

					</Routes>
				}
			</div>
		</div >
	);
};

export default App;