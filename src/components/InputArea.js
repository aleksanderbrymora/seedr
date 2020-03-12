import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './SelectField';
import axios from 'axios';

export default () => {
	const [model, setModel] = useState('Artist');
	const [fields, setFields] = useState([]);
	const [copies, setCopies] = useState(10);

	const generateRequest = e => {
		e.preventDefault();
		const req = {};
		req.token = process.env.REACT_APP_JSON_TOKEN;
		req.data = {};
		fields.map(field => (req.data[field.value] = field.value));
		req.data._repeat = copies;
		generateSeeds(req);
	};

	const generateSeeds = async req => {
		const resJSON = await axios.post('https://app.fakejson.com/q', req);
		console.log(resJSON);
	};

	return (
		<Inputs>
			<ModelName
				placeholder="What's the model name?"
				autoFocus
				onChange={e => setModel(e.target.value)}
				value={model}
				required
			/>
			<Select
				setFields={setFields}
				required={true}
				autoFocus={true}
				value={fields}
			/>
			<NumberOfSeeds
				onChange={e => setCopies(parseInt(e.target.value))}
				placeholder='Number'
				type='number'
				required
				value={copies}
				min='1'
				max='20'
			/>
			<Submit onClick={generateRequest}>Generate</Submit>
		</Inputs>
	);
};

const Inputs = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	> * {
		margin: 5rem 0.5rem;
		height: 2.5rem;
		font-size: 1em;
	}
`;

const NumberOfSeeds = styled.input`
	width: 7rem;
	padding: 5px 15px;
	border-radius: 5px;
	border: 1px solid #ccc;
`;

const Submit = styled.button`
	padding: 5px 15px;
	border-radius: 5px;
	border: 2px solid blue;
	background-color: white;
`;

const ModelName = styled.input`
	padding: 5px 15px;
	border-radius: 5px;
	border: 1px solid #ccc;
`;
