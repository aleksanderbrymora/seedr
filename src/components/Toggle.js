import React from 'react';
import styled from 'styled-components';

export default ({ setTheme, theme }) => {
	return <Toggle onClick={() => setTheme(!theme)}>Theme</Toggle>;
};

const Toggle = styled.button`
	position: fixed;
	right: 2rem;
	top: 50%;
	transform: translateY(-50%);
	padding: 5px 15px;
	background-color: ${props => props.theme.main};
	border: none;
	border-radius: 5px;
	font-family: Inter;
	color: ${props => props.theme.fontColor};
`;
