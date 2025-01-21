function getColumnFamilies(props = {}) {
	const columnFamilies = [];

	for (const prop in props) {
		if (props[prop] && props[prop].type === 'colFam') {
			columnFamilies.push(prop);
		}
	}

	if (!columnFamilies.length) {
		columnFamilies.push('<columnFamily>');
	}

	return columnFamilies;
}

module.exports = {
	getColumnFamilies,
};
