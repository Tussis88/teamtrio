import { scryfallFetch } from "./scryfall.js";
import {basicLands} from "../assets/basicLands";
// deckValidator() controlla i singoli mazzi. Poi creerò una seconda funzione che checkerà i 3 mazzi con deckValidator e, se errors sarà vuoto prenderà parsedInput 
// ParsedInput deve essere cambiato: deckValidator dirà già se il mazzo è legale in pauper ed è corretto. Quindi devo solo dare come output i nomi delle singole carte non terra base del mazzo come array.
// La funzione trioValidator creerà un set con i 3 output di deckValidator e checkerà la lunghezza del set. Se il sest è lungo tanto quanto la somma della lunghezza dei 3 array allora non ci sono doppioni. Altrimenti significa che c'erano doppioni.

async function deckValidator(text) {
  const errors = [];
  const parsedInput = [];
  const parsedOutput = [];

  const clearData = () => {
    errors.length = 0;
    parsedInput.length = 0;
    parsedOutput.length = 0;
  }

  const inputParser = () => {
    const lines = text.trim().split("\n");

    clearData();

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^(1?[1-9]|10|20)\s{1,2}(.+)$/);

      if (match) {
        parsedInput.push({
          quantity: parseInt(match[1]),
          cardName: match[2].trim()
        });
      } else {
        errors.push(`❌ Errore su riga:  ${lines[i]}`);
      }
    }
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
      if (card.legalities.pauper != "legal") {
        errors.push("❌ carta non legale in pauper: " + card.name);
      }
    });
  }

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

  const maxCopiesCheck = () => {
    parsedOutput.forEach(line => {
      if (line.quantity > 4) errors.push(`❌ Ci sono ${line.quantity} copie di ${line.cardName}`);
    });
  }

  inputParser();
  if (errors.length > 0) return { errors: errors, cardList: null };

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
