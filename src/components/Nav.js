import React from 'react';
import styled from 'styled-components';

export default () => {
	return (
		<Nav>
			<h1>Seedr</h1>
			<h2>It's missing an 'e' so it's cool</h2>
		</Nav>
	);
};

const Nav = styled.nav`
	width: 100%;
	padding: 0.5rem;
	background-color: aquamarine;
	color: white;
	font-family: Inter;
	> * {
		text-align: center;
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
