const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should return a negative number when multiplying a negetive and integer number', () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test('should return 0 if any number is miltiplied by 0', () => {
    const result = multiply(0, 26);
    expect(result).toBe(0);
  });
});
