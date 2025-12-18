function appLogic() {
    const errors = [];
    const parsedInput = [];

    const getErrors = () => errors;
    const getData = () => parsedInput;

    const clearData = () => {
        errors.length = 0;
        parsedInput.length = 0;
    }

    const inputParser = (text) => {
        const lines = text.trim().split("\n");

        clearData();

        for (let i = 0; i < lines.length; i++) {
            const match = lines[i].match(/^(1?[1-9]|10|20)\s{1,2}(.+)$/);

            if (match) {
                parsedInput.push({
                    quantity: parseInt(match[1]),
                    card: match[2].trim()
                })
            } else {
                errors.push(`❌ Errore su riga:  ${lines[i]}`);
            }
        }
    }

    const quantityCheck = () => {
        const total = parsedInput.reduce((accumulator, line) => {
            return line.quantity + accumulator;
        }, 0);

        if (total === 75) {
            return true;
        } else {
            errors.push(`❌ Errore: questo mazzo ha ${total} carte`);
        }

        return { getErrors, getData, inputParser }
    }
}

export { appLogic }