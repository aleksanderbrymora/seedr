import React, { useState } from 'react';
import Nav from './Nav';
import styled, { ThemeProvider } from 'styled-components';
import InputArea from './InputArea';

function App() {
	const [isDark, setIsDark] = useState(false);

	return (
		<Background isDark={isDark} className='App'>
			<ThemeProvider theme={isDark ? dark : light}>
				<Nav currentTheme={isDark} setTheme={setIsDark} />
				<Container>
					<InputArea />
				</Container>
			</ThemeProvider>
		</Background>
	);
}

const light = {
	main: 'white',
	inputs: 'white',
	fontColor: 'black',
	headingFontColor: 'white',
	outline: '#ccc',
	accent: 'blue',
	hover: 'aliceblue',
};

const dark = {
	main: '#161616',
	inputs: '#292828',
	fontColor: 'white',
	headingFontColor: '#292828',
	outline: '#999',
	accent: 'aliceblue',
	hover: '#555',
};

const Container = styled.main`
	max-width: 1080px;
	margin: 0 auto;
`;

const Background = styled.div`
	min-height: 100vh;
	background-color: ${({ isDark }) => (isDark ? dark.main : light.main)};
`;

export default App;
