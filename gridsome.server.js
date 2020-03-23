module.exports = function(api) {
	api.loadSource(async store => {
		const metadata = require('./src/data/metadata.json')
		Object.keys(metadata).forEach(key => {
			store.addMetadata(key, metadata[key])
		})
	})
}
