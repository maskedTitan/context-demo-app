import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
	const [ isDarkmode, toggleTheme ] = useToggleState();

	return <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>{props.children}</ThemeContext.Provider>;
}

//Higher Order Component
// export const withThemeContext = (Component) => (props) => {
// 	return <ThemeContext.Consumer>{(value) => <Component themeContext={value} {...props} />}</ThemeContext.Consumer>;
// };
