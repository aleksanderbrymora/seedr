import React from 'react';
import styled from 'styled-components';
import Select from '../SelectField';

export default ({
	model,
	setModel,
	fields,
	setFields,
	copies,
	setCopies,
	generateRequest,
}) => (
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

const Inputs = styled.form`
	@import url('https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap');
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-family: Inter;
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