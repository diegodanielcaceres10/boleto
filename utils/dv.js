exports.validDVs = (data, multiplier = 2) => {
    try {
        if (data && data.length) {
            let numbers = [];
            for (let number of data) {
                let value = number * multiplier;
                if (value > 9) {
                    let newvalue = 0;
                    for (let digit of value.toString()) {
                        newvalue += parseInt(digit);
                    };
                    numbers.push(newvalue);
                } else {
                    numbers.push(value);
                };
                multiplier = multiplier == 2 ? 1 : 2;
            };
            let total = 0;
            for (let number of numbers) {
                total += number;
            };
            return (Math.ceil(total / 10) * 10) - total;
        };
        return false;
    } catch (err) {
        throw err;
    };
};