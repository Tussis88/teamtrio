import {deckValidator} from "./deckValidator";

async function teamValidator(deck1, deck2, deck3) {
    const results = await Promise.all([deckValidator(deck1), deckValidator(deck2), deckValidator(deck3)]);

    const errors = [...results.errors];
    console.log(errors);
}