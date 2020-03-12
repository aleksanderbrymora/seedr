import Select from 'react-select';
import React from 'react';
import styled from 'styled-components';

const options = [
	{ value: 'name', label: 'Name' },
	{ value: 'addressCity', label: 'City' },
	{ value: 'addressBuilding', label: 'Address' },
	{ value: 'addressZipCode', label: 'Zip Code' },
	{ value: 'phoneMobile', label: 'Phone' },
	{ value: 'numberInt', label: 'Random Integer' },
	{ value: 'numberFloat', label: 'Random Float' },
	{ value: 'numberBool', label: 'Random Boolean' },
	{ value: 'date', label: 'Date' },
	{ value: 'dateDOB', label: 'Date of Birth' },
	{ value: 'time', label: 'Random Time' },
	{ value: 'stringShort', label: 'Random Sentence' },
	{ value: 'stringLong', label: 'Random Paragraph' },
	{ value: 'internetEmail', label: 'Email' },
	{ value: 'internetDomain', label: 'Website' },
	{ value: 'internetUrl', label: 'URL' },
	{ value: 'colorHEX', label: 'HEX color' },
	{ value: 'bankCCNumber', label: 'Random Credit Card number' },
	{ value: 'personNickname', label: 'Username' },
	{ value: 'personAvatar', label: 'Link to random robohash avatar' },
	{ value: 'personPassword', label: 'Password' },
	{ value: 'productName', label: 'Random Product Name' },
	{ value: 'companyName', label: 'Company name' },
];

export default ({ setFields }) => {
	return (
		<StyledSelect
			onChange={fields => setFields(fields)}
			isMulti={true}
			options={options}
			placeholder={'Data...'}
		/>
	);
};

const StyledSelect = styled(Select)`
	width: 50%;
	height: 2.5rem;
`;
