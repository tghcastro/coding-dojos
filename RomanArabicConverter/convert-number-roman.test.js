const romanConverter = require('./romanConverter')
const arabicoConverter = require('./arabicoConverter')
const expect = require('expect')

test('Convert 1 to I', () => {
    const valueToConvert = 1
    const expectedResult = "I"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 5 to V', () => {
    const valueToConvert = 5
    const expectedResult = "V"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 10 to X', () => {
    const valueToConvert = 10
    const expectedResult = "X"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 2 to II', () => {
    const valueToConvert = 2
    const expectedResult = "II"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert I to 1', () => {
    const valueToConvert = "I"
    const expectedResult = 1
    const result = arabicoConverter.convertToArabico(valueToConvert)

    expect(result).toBe(expectedResult);
});