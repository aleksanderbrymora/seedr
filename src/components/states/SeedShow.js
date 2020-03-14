import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components';
import { Submit } from './AwaitInput';

export default ({ seeds }) => {
	const [isCopied, setIsCopied] = useState(false);
	const copySeeds = () => {
		navigator.clipboard.writeText(seeds);
		setIsCopied(true);
	};

	return (
		<>
			<SyntaxHighlighter language='ruby' style={docco}>
				{seeds}
			</SyntaxHighlighter>
			<Button onClick={copySeeds}>{isCopied ? 'Copied!' : 'Copy'}</Button>
		</>
	);
};

const Button = styled(Submit)`
	display: block;
	margin: 1rem auto;
`;
