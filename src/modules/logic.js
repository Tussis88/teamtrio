import { scryfallFetch, inputParser } from "./utilities.js";
import {basicLands} from "../assets/basicLands";
// deckValidator() controlla i singoli mazzi. Poi creerò una seconda funzione che checkerà i 3 mazzi con deckValidator
// La funzione trioValidator creerà un set con i 3 output di deckValidator e checkerà la lunghezza del set. Se il sest è lungo tanto quanto la somma della lunghezza dei 3 array allora non ci sono doppioni. Altrimenti significa che c'erano doppioni.

async function deckValidator(text) {
  const errors = [];
  const parsedInput = [];
  const parsedOutput = [];

  const deckDataParser = (deck) => {

    for (const [index, card] of deck.entries()) {
      if (basicLands.includes(card.type_line)) {
        continue;
      }
      const currentCardName = card.name;
      const currentQuantity = parsedInput[index].quantity;

      const existingCard = parsedOutput.find(item => item.cardName === currentCardName);

      if (existingCard) {
        existingCard.quantity += currentQuantity;
      } else {
        parsedOutput.push({ quantity: currentQuantity, cardName: currentCardName });
      }
    }
  };

  const inputCheck = (textInput) => {
    const parsedResult = inputParser(textInput);

    parsedInput.push(...parsedResult.parsedText);
    errors.push(...parsedResult.errors);
  }

  const quantityCheck = () => {
    const total = parsedInput.reduce((accumulator, line) => {
      return line.quantity + accumulator;
    }, 0);

    if (total !== 75) {
      errors.push(`❌ Questo mazzo ha ${total} carte`);
    }
  }

  const existCheck = async () => {
    try {
      const fetchedData = await scryfallFetch(parsedInput);
      if (fetchedData.not_found && fetchedData.not_found.length > 0) {
        fetchedData.not_found.forEach((card) => {
          errors.push("❌ carta non presente nel database di scryfall: " + card.name);
        });
      }
      return fetchedData.data;
    } catch (error) {
      errors.push(error);
    }
  }

  const legalityCheck = (deck) => {
    deck.forEach((card) => {
      if (card.legalities.pauper !== "legal") {
        errors.push("❌ carta non legale in pauper: " + card.name);
      }
    });
  }

  const maxCopiesCheck = () => {
    parsedOutput.forEach(line => {
      if (line.quantity > 4) errors.push(`❌ Ci sono ${line.quantity} copie di ${line.cardName}`);
    });
  }

  inputCheck(text);
  if (errors.length > 0) return { errors: errors, cardsList: null };

  quantityCheck();
  if (errors.length > 0) return { errors: errors, cardsList: null };

  const deckData = await existCheck()
  if (errors.length > 0) return { errors: errors, cardsList: null };

  legalityCheck(deckData);
  if (errors.length > 0) return { errors: errors, cardsList: null };

  deckDataParser(deckData);
  maxCopiesCheck();
  if (errors.length > 0) return { errors: errors, cardsList: null };

  return { errors: errors, cardsList: parsedOutput }
}

export { deckValidator }