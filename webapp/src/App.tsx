import React from "react";
import {
	Route,
	HashRouter as Router,
	Switch,
} from "react-router-dom";

import {
	Container
} from "@material-ui/core";

import {
	Header
} from "./Layout";

import {
	About,
	Garage,
	Home
} from "./Pages";

import useStyles from "./Styles";

function App() {

	const classes = useStyles();

	return (
		<Router>
			<Header className={classes.header} />
			<Container className={classes.root} >
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/garage" component={Garage} />
					<Route exact path="/about" component={About} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
