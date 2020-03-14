import React, { useState } from 'react';
import axios from 'axios';
import AwaitiInput from './states/AwaitInput';
import seedFormat from './seedFormat';
import SeedShow from './states/SeedShow';
import styled from 'styled-components';

export default () => {
	const [model, setModel] = useState('');
	const [fields, setFields] = useState([]);
	const [copies, setCopies] = useState(2);
	const [seeds, setSeeds] = useState('');
	const [state, setState] = useState('awaitInput');

	const generateRequest = e => {
		e.preventDefault();
		const req = {};
		req.token = process.env.REACT_APP_JSON_TOKEN;
		req.data = {};
		fields.map(field => (req.data[field.value] = field.value));
		req.data._repeat = copies;
		fetchSeedData(req);
	};

	const fetchSeedData = async req => {
		setState('loading');
		try {
			const res = await axios.post('https://app.fakejson.com/q', req);
			generateSeedStrings(res);
			setState('show');
		} catch (error) {
			console.error(error);
			setState('error');
		}
	};

	const generateSeedStrings = res => {
		const capitalizedModel = model.replace(/\b\w/g, l => l.toUpperCase());
		setSeeds(seedFormat(capitalizedModel, res.data, copies));
	};

	return (
		<>
			<AwaitiInput
				model={model}
				setModel={setModel}
				fields={fields}
				setFields={setFields}
				copies={copies}
				setCopies={setCopies}
				generateRequest={generateRequest}
			/>
			{
				{
					loading: <Loading>Loading...</Loading>,
					show: <SeedShow seeds={seeds} />,
					error: <Error />,
				}[state]
			}
		</>
	);
};

const Loading = styled.p`
	color: ${props => props.theme.fontColor};
	font-family: Inter, sans-serif;
	text-align: center;
`;

const Error = () => <div>There has been an error</div>;
