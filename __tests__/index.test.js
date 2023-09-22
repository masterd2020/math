const root = require('../main.js');

describe('Testing', () => {
	it('should return a welcome message', () => {
		const message = root.greet();

		expect(message).toBe('Welcome here');
	});

	it('should return a welcome message', () => {
		const message = root.greetMorning();

		expect(message).toBe('Good morning');
	});

	it('should return a welcome message', () => {
		const message = root.greetAfternoon();

		expect(message).toBe('Good Afternoon');
	});

	it('should return a welcome message', () => {
		const message = root.greetEvening();

		expect(message).toBe('Good Evening.');
	});
});

describe('Arithmetic Operation', () => {
	it('should add two number together', () => {
		const result = root.ARITHMETIC.add(2, 3);

		expect(result).toBe(5);
	});
});
