function generateScript(data, logger, cb) {
	const { entityData } = data;
	let { jsonSchema } = data;

	try {
		jsonSchema = JSON.parse(jsonSchema);
	} catch (err) {
		return cb(err);
	}

	const columnFamilies = this.getColumnFamilies(jsonSchema.properties);
	let script = `create '${entityData.collectionName.toLowerCase()}'`;

	columnFamilies.forEach(item => {
		script = `${script}, '${item}'`;
	});

	return cb(null, script);
}

module.exports = {
	generateScript,
};
