import { deckValidator } from "./deckValidator";

async function teamValidator(deck1, deck2, deck3) {
  const results = await Promise.all([deckValidator(deck1), deckValidator(deck2), deckValidator(deck3)]);

  const errors = [[], [], []];
  const decks = [];
  results.forEach((result, index) => {
    errors[index] = [...result.errors];
    if (result.cardsList) decks.push(result.cardsList);
  });

  if (errors.some(i => i.length > 0)) {
    return errors;
  }

  for (let i = 0; i < decks.length; i++) {
    for (let j = i + 1; j < decks.length; j++) {
      const duplicatesObj = decks[i].filter(card => decks[j].some(c => c.cardName === card.cardName));
      if (duplicatesObj.length > 0) {
        const duplicatesNames = duplicatesObj.map(card => card.cardName);
        errors[i].push("❌ carta doppia: " + duplicatesNames.join(", "));
        errors[j].push("❌ carta doppia: " + duplicatesNames.join(", "));
      }
    }
  }

  if (errors.some(i => i.length > 0)) return errors;
  return null;
}

export { teamValidator };
