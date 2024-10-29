const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
	const result = sum(1, 2);
	console.log("Это сумма запрашиваемого числа:", result);
	expect(result).toBe(3);	
});
