import CreatableSelect from 'react-select/creatable';
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
			isMulti
			options={options}
			placeholder={'Data...'}
			styles={{
				menu: provided => ({
					...provided,
					backgroundColor: props => props.theme.main,
					color: props => props.theme.hover,
				}),
				control: provided => ({
					...provided,
					backgroundColor: props => props.theme.main,
				}),
				option: provided => ({
					...provided,
					color: props => {
						console.log(provided);
						return props.theme.hover;
					},
				}),
			}}
		/>
	);
};

const StyledSelect = styled(CreatableSelect)`
	width: 50%;
	height: 2.5rem;
	color: ${props => props.theme.fontColor};
`;
