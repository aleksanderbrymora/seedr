export default (model, data, number) => {
	let seed = `${model}.destroy_all`;
	for (let i = 0; i < number; i++) {
		seed += `\r\n${model[0].toLowerCase()}${i + 1} = ${model}.create `;
		const properties = Object.keys(data[i]).map(
			obj => `:${obj} => '${data[i][obj]}'`,
		);
		seed += properties.join(', ');
	}
	return seed;
};
