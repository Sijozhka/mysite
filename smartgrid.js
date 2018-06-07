const smartgrid = require('smart-grid');

const settings = {
	container: {
		maxWidth: '1280px',
		fields: '20px'
	},

	oldSizeStyle: false,
	properties: []

};

smartgrid('./src/precss', settings);