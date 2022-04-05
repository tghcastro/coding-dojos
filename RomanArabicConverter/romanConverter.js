class RomanConverter {
    convertToRoman(valueToConvert) {
        let valueToReturn

        if (valueToConvert == 1) {
            valueToReturn = "I"
        }
        if (valueToConvert == 2) {
            valueToReturn = "II"
        }
        if (valueToConvert == 3) {
            valueToReturn = "III"
        }
        if (valueToConvert == 4) {
            valueToReturn = "IV"
        }
        if (valueToConvert == 5) {
            valueToReturn = "V"
        }
        if (valueToConvert == 6) {
            valueToReturn = "VI"
        }
        if (valueToConvert == 7) {
            valueToReturn = "VII"
        }
        if (valueToConvert == 8) {
            valueToReturn = "VIII"
        }
        if (valueToConvert == 9) {
            valueToReturn = "IX"
        }
        if (valueToConvert == 10) {
            valueToReturn = "X"
        }
        return valueToReturn
    }
}

module.exports = new RomanConverter()