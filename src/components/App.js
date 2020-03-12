import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import InputArea from './InputArea';

// const JSON_TOKEN = process.env.REACT_APP_JSON_TOKEN;

function App() {
	return (
		<div className='App'>
			<Nav />
			<Container>
				<InputArea />
			</Container>
		</div>
	);
}

const Container = styled.main`
	max-width: 1080px;
	margin: 0 auto;
`;

export default App;
