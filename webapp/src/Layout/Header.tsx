import React, { useState } from "react";

import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
} from "@material-ui/core";

import {
	Menu as MenuIcon,
} from "@material-ui/icons";

import {
	Drawer,
} from ".";

interface Props {
	className?: any;
}

interface State {
	drawerOpen: boolean;
}

const Header = (props: Props) => {
	const [state, setState] = useState<State>({
		drawerOpen: false,
	});

	const toggleDrawer = () => {
		setState((state: State) => ({
			...state,
			drawerOpen: !state.drawerOpen,
		}));
	};

	return (
		<>
			<AppBar className={props.className}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="header"
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">
    Church House
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				drawerOpen={state.drawerOpen}
				toggleDrawer={toggleDrawer}
			/>
		</>
	);
};

export default Header;
