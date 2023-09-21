const root = require('../main.js');

describe('Testing', () => {
	it('should return a welcome message', () => {
		const message = root.greet();

		expect(message).toBe('Welcome here');
	});
});
