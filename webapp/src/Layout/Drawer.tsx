import React from "react";
import {
	useHistory,
} from "react-router-dom";

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SvgIcon,
	SvgIconTypeMap,
	SwipeableDrawer,
} from "@material-ui/core";

import {
	OverridableComponent,
} from "@material-ui/core/OverridableComponent";

import {
	Info as AboutIcon,
	DirectionsCar as CarIcon,
	Home as HomeIcon,
} from "@material-ui/icons";

interface Props {
	drawerOpen: boolean;

	toggleDrawer: () => void;
}

interface DrawerItem {
	title: string;
	path: string;
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const Drawer = (props: Props) => {
	const history = useHistory();

	const drawerItems: DrawerItem[] = [
		{
			title: "Home",
			path: "/",
			icon: HomeIcon,
		},
		{
			title: "Garage",
			path: "/garage",
			icon: CarIcon,
		},
		{
			title: "About",
			path: "/about",
			icon: AboutIcon,
		}
	];

	const redirectOnClick = (path: string) => () => {
		// Redirect if the current path is not the target path
		if (history.location.pathname !== path) {
			history.push(path);
		}

		props.toggleDrawer();
	};

	return (
		<SwipeableDrawer
			anchor="left"
			open={props.drawerOpen}
			onOpen={() => { }}
			onClose={props.toggleDrawer}
		>
			<List>
				{drawerItems.map(({ title, path, icon }: DrawerItem) => (
					<ListItem
						key={title}
						button
						onClick={redirectOnClick(path)}
					>
						<ListItemIcon><SvgIcon component={icon} /></ListItemIcon>
						<ListItemText primary={title} />
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

export default Drawer;
