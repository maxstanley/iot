import {
	makeStyles,
	Theme,
} from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette }: Theme) => ({
	header: {
		position: "static",
		backgroundColor: palette.primary.dark,
	},
	root: {
		backgroundColor: (palette.type === "dark") ? "#424242" : "#fafafa",
		color: (palette.type === "dark") ? "white" : "black",
		height: "100vh",
		width: "100vw",
		margin: 0,
		textAlign: "center",
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
	},
	"@global": {
		"body": {
			margin: 0
		},
		"code": {
			fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
		},
		"h1,h2,h3,h4": {
			paddingTop: "0.5em",
		},
		".roundedButton": {
			height: "15em",
			width: "15em",
			borderRadius: "50%",
			textAlign: "center",
		},
	},
}));

export default useStyles;
