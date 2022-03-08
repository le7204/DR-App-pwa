import "./App.css";
import { Routes, Route } from "react-router-dom";
import Splash from "./components/utility/Splash";
import GrowItemsList from "./components/GrowItem/GrowItemsList";
import Sidebar from "./components/utility/Sidebar";

import React, { Component } from "react";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leftPanel: "closed",
		};
	}
	navigate = (route) => {
		console.log("route:", route);
	};
	arrowClick = () => {
		if (this.state.leftPanel === "open")
			this.setState({ ...this.state, leftPanel: "closed" });
		else this.setState({ ...this.state, leftPanel: "open" });
	};
	render() {
		return (
			<div className='app'>
				<Sidebar open={this.state.leftPanel === "open"} arrowClick={this.arrowClick} />
				<div className={this.state.leftPanel === "open" ? 'main-screen panel-open' : 'main-screen panel-closed'} >
					<Routes>
						<Route path='/' element={<Splash />} />
						<Route
							path='GrowItems'
							element={<GrowItemsList growItemClick={this.navigate} />}
						/>
					</Routes>
				</div>
			</div >
		);
	}
}
