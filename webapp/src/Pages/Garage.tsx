import React, { useState } from "react";

import {
	Button,
	Typography,
} from "@material-ui/core";

import environment from "../environment";

const {
	REACT_APP_GARAGE_USER,
	REACT_APP_GARAGE_PASSWORD,
	REACT_APP_URL
} = environment;

interface State {
	button: {
		text: string;
		disabled: boolean;
	}
}

const Garage = () => {
	const defaultState: State = {
		button: {
			text: "Trigger",
			disabled: false,
		},
	};

	const [state, setState] = useState<State>(defaultState);

	const openGarage = async () => {
		setState((state: State) => ({
			...state,
			button: {
				text: "Sending",
				disabled: true,
			},
		}));

		const authentication = Buffer.from(`${REACT_APP_GARAGE_USER}:${REACT_APP_GARAGE_PASSWORD}`);

		const requestHeaders = new Headers();
		requestHeaders.append("Authorization", `Basic ${authentication.toString("base64")}`);

		const requestOptions = {
			method: "GET",
			headers: requestHeaders,
		};

		const response = await fetch(REACT_APP_URL, requestOptions);

		if (response.status !== 200) {
			setState((state: State) => ({
				...state,
				button: {
					text: "Failed!",
					disabled: false,
				},
			}));
			return;
		}

		const seconds = 5;
		for (let i = seconds; i > -1; i--) {
			await new Promise((r) => setTimeout(r, 1000));
			setState((state: State) => ({
				...state,
				button: {
					...state.button,
					text: i.toString(),
				},
			}));
		}

		setState((state: State) => ({
			...state,
			button: {
				text: "Opening",
				disabled: true,
			},
		}));
	};

	return (
		<>
			<Typography variant="h3">Garage</Typography>
			<Button
				disabled={state.button.disabled}
				onClick={openGarage}
				className="roundedButton"
				style={{
					backgroundColor: (!state.button.disabled) ? "#FF0000" : "#00FF00",
					margin: "5vh 0",
				}}
			>
				<Typography variant="h6">{state.button.text}</Typography>
			</Button>
		</>
	);
};

export default Garage;
