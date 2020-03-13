import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default ({ seeds }) => {
	return (
		<>
			<SyntaxHighlighter language='ruby' style={docco}>
				{seeds}
			</SyntaxHighlighter>
			<button>Copy</button>
		</>
	);
};
