const romanConverter = require('./romanConverter')
const arabicoConverter = require('./arabicoConverter')
const expect = require('expect')


// I - 1 ± 2 - II § 3 - III ± 4 - IV ± 5 - V
// VI - 6 ± 2 - VII § 7 - VIII ± 8 - IX ± 9 - X

test('Convert 1 to I', () => {
    const valueToConvert = 1
    const expectedResult = "I"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 2 to II', () => {
    const valueToConvert = 2
    const expectedResult = "II"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 3 to III', () => {
    const valueToConvert = 3
    const expectedResult = "III"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 4 to IV', () => {
    const valueToConvert = 4
    const expectedResult = "IV"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 5 to V', () => {
    const valueToConvert = 5
    const expectedResult = "V"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 6 to VI', () => {
    const valueToConvert = 6
    const expectedResult = "VI"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 7 to VII', () => {
    const valueToConvert = 7
    const expectedResult = "VII"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 8 to VIII', () => {
    const valueToConvert = 8
    const expectedResult = "VIII"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 9 to IX', () => {
    const valueToConvert = 9
    const expectedResult = "IX"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});

test('Convert 10 to X', () => {
    const valueToConvert = 10
    const expectedResult = "X"
    const result = romanConverter.convertToRoman(valueToConvert)

    expect(result).toBe(expectedResult);
});



test('Convert I to 1', () => {
    const valueToConvert = "I"
    const expectedResult = 1
    const result = arabicoConverter.convertToArabico(valueToConvert)

    expect(result).toBe(expectedResult);
});