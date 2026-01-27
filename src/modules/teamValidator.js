import { deckValidator } from "./deckValidator";

async function teamValidator(deck1, deck2, deck3) {
  const results = await Promise.all([deckValidator(deck1), deckValidator(deck2), deckValidator(deck3)]);

  const errors = [];
  const decks = [];
  results.forEach((result) => {
    errors.push(result.errors);
    if (result.cardsList) decks.push(result.cardsList);
  });

  if (errors.some(i => i.length > 0)) {
    console.table(errors);
    return errors;
  }

  for (let i = 0; i < decks.length; i++) {
    for (let j = i + 1; j < decks.length; j++) {
      console.log(i, j);
      const duplicates = decks[i].filter(card => decks[j].includes(card));
      if (duplicates) {
        if (errors.length === 0) errors.push([],[],[]);
        errors[i].push("❌ carta presente in un altro deck: " + duplicates.join(", "));
        errors[j].push("❌ carta presente in un altro deck: " + duplicates.join(", "));
      }
    }
  }

  if (errors.some(i => i.length > 0)) return errors;
  return null;
}

export { teamValidator };
