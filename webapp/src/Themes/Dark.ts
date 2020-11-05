import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			light: "#3378af",
			main: "#01579b",
			dark: "#003c6c",
		},
		secondary: {
			light: "#c54949",
			main: "#b71c1c",
			dark: "#801313",
		},
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
		MuiTypography: {
			variantMapping: {
				h3: "h1",
				h4: "h2",
				h5: "h3",
				h6: "h4",
			},
		},
	},
	spacing: 4,
	typography: {
		fontSize: 12,
	},
});
