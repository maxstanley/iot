import {
	Theme,
} from "@material-ui/core";

import dark from "./Dark";

const themes: { [key: string]: Theme } = {
	dark,
};

const getTheme = (theme: string): Theme => themes[theme];

export default getTheme;
