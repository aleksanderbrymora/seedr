import React from 'react';
import Toggle from './Toggle';
import styled from 'styled-components';

export default ({ setTheme, currentTheme }) => {
	return (
		<Nav>
			<Toggle theme={currentTheme} setTheme={setTheme} />
			<h1>Seedr</h1>
			<h2>It's missing an 'e' so it's cool</h2>
		</Nav>
	);
};

const Nav = styled.nav`
	width: 100%;
	padding: 0.5rem;
	background-color: aquamarine;
	font-family: Inter;
	> h1,
	h2 {
		text-align: center;
		color: ${props => props.theme.headingFontColor};
	}
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 1rem;
	}
	animation: colors 15s infinite;

	@keyframes colors {
		0% {
			filter: hue-rotate(0);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}
`;
