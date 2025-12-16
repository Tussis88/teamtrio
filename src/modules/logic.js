class AppLogic {
    #errors = [];
    #parsedInput = [];

    inputParser(text) {
        const lines = text.trim().split("\n");

        this.#parsedInput = [];

        for (let i = 0; i < lines.length; i++) {
            const match = lines[i].match(/^(1?[1-9]|10|20)\s{1,2}(.+)$/);

            if (match) {
                this.#parsedInput.push({
                    quantity: parseInt(match[1]),
                    card: match[2].trim()
                })
            } else {
                this.#errors.push("errore");
            }
        }
    }
}