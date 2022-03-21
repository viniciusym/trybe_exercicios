let { randomNumber } = require('./service');

describe('testa a função randomNumber', () => {
  it('testa se a função', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(2);

    randomNumber.mockImplementationOnce((a, b) => {
      return a / b;
    });

    expect(randomNumber(2, 2)).toBe(1);
    expect(randomNumber()).toBe(10);

    randomNumber.mockImplementation((a, b, c) => {
      return a * b * c;
    });

    expect(randomNumber(2, 2, 2)).toBe(8);

    randomNumber.mockReset();

    randomNumber.mockImplementation((a) => a * 2);

    expect(randomNumber(2)).toBe(4)
  });
})