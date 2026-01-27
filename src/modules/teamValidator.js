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

  // da rivedere sta parte.. 
  // Provare a fare un ciclo che controlla tutti i singoli array e se trova un doppione pusha quell'elemento in errors nelle posizioni corrette con la solita struttura [[][][]]
  for (let i = 0; i < decks.length; i++) {
    for (let j = i + 1; j < decks.length; j++) {
      console.log(i, j);
    }
  }
}
/*
  const cardSet = new Set();
  const cardArray = [];
  results.forEach(result => {
    result.cardsList.forEach(card => {
      cardSet.add(card);
      cardArray.push(card);
    });
  });
  console.log(...results);
  if (cardArray.length === cardSet.size) console.log("valid");
*/
export { teamValidator };
