class RomanConverter {
    convertToRoman(valueToConvert) {
        let dozens = Math.trunc(valueToConvert/10)
        let remainder = valueToConvert % 10
        let valueToReturn = ""

        for (let i = 1; i <= dozens; i++) {
            valueToReturn = valueToReturn + "X";
        }

        if (remainder == 1) {
            valueToReturn += "I"
        }
        if (remainder == 2) {
            valueToReturn += "II"
        }
        if (remainder == 3) {
            valueToReturn += "III"
        }
        if (remainder == 4) {
            valueToReturn += "IV"
        }
        if (remainder == 5) {
            valueToReturn += "V"
        }
        if (remainder == 6) {
            valueToReturn += "VI"
        }
        if (remainder == 7) {
            valueToReturn += "VII"
        }
        if (remainder == 8) {
            valueToReturn += "VIII"
        }
        if (remainder == 9) {
            valueToReturn += "IX"
        }
        if (remainder == 0) {
            valueToReturn += ""
        }
        return valueToReturn
    }
}

module.exports = new RomanConverter()