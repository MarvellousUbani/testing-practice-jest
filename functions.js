function generateChar(low, high) {
    const charArr = [];
    for (let i = low; i <= high; i += 1) {
        charArr.push(String.fromCharCode(i));
    }
    return charArr;
}
const functionObject = {
    capitalize: (str) => `${str[0].toUpperCase()}${str.substr(1, str.length-1)}`,
    reverse: (str) => str.split("").reverse().join(""),
    calculator: {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        divide: (x, y) => {
            if (y === 0) {
                return 'Error';
            }
            return x / y;
        },
        multiply: (x, y) => x * y,
    },
    caesar: (str, num) => {
        const letters = generateChar(97, 122);
        let output = "";
        str.split("").forEach(letter => {
            let letterUpper = /^[A-Z]/.test(letter);
            letter = letter.toLowerCase();
            const letterIndex = letters.indexOf(letter);
            if (/[^a-zA-Z]/.test(letter)) {
                output += letter;
            } else {
                if ((letterIndex + num) > 25) {
                    if (letterUpper) {
                        output += letters[(letterIndex + num) % 25 - 1].toUpperCase();
                    } else {
                        output += letters[(letterIndex + num) % 25 - 1];
                    }

                } else {
                    if (letterUpper) {
                        output += letters[letterIndex + num].toUpperCase();
                    } else {
                        output += letters[letterIndex + num];
                    }
                }
            }
        })
        return output;
    },
    analyze: (arr) => {
        let len = arr.length;
        let avg = arr.reduce((a, b) => {
            return a + b
        }, 0) / len;
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return {
            average: avg,
            min: min,
            max: max,
            length: len
        }
    }
}

module.exports = functionObject;