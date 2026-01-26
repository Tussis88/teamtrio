import {deckValidator} from "./deckValidator";

async function teamValidator(deck1, deck2, deck3) {
    const results = await Promise.all([deckValidator(deck1), deckValidator(deck2), deckValidator(deck3)]);

    const errors = [];
    results.forEach((result) => {errors.push(result.errors);});

    if (errors.every(i => i.length > 0)) {
        console.table(...errors);
    } else {
        const cardSet = new Set();
        console.log(...results);
    }
    // return qualcosa?!
}

export { teamValidator };