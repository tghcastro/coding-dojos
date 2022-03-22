class RomanConverter {
    convertToRoman(valueToConvert) {
        let valueToReturn

        if (valueToConvert == 1) {
            valueToReturn = "I"
        }
        if (valueToConvert == 5) {
            valueToReturn = "V"
        }
        if (valueToConvert == 10) {
            valueToReturn = "X"
        }
        return valueToReturn
    }
}

module.exports = new RomanConverter()