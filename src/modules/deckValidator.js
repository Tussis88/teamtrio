import { scryfallFetch, inputParser } from "./utilities.js";
import {basicLands} from "../assets/basicLands";

async function deckValidator(inputText) {
  const errors = [];
  const userCardList = [];
  const noBasicsList = [];

  const deckDataParser = (deck) => {
    for (const [index, card] of deck.entries()) {
      if (basicLands.includes(card.type_line)) {
        continue;
      }
      const currentCardName = card.name;
      const currentQuantity = userCardList[index].quantity;
      const existingCard = noBasicsList.find(item => item.cardName === currentCardName);
      if (existingCard) {
        existingCard.quantity += currentQuantity;
      } else {
        noBasicsList.push({ quantity: currentQuantity, cardName: currentCardName });
      }
    }
  };

  const inputCheck = (textInput) => {
    const parsedResult = inputParser(textInput);

    userCardList.push(...parsedResult.parsedText);
    errors.push(...parsedResult.errors);
  }

  const quantityCheck = () => {
    const total = userCardList.reduce((accumulator, line) => {
      return line.quantity + accumulator;
    }, 0);

    if (total !== 75) {
      errors.push(`❌ Questo mazzo ha ${total} carte`);
    }
  }

  const existCheck = async () => {
    try {
      const fetchedData = await scryfallFetch(userCardList);
      if (fetchedData.not_found && fetchedData.not_found.length > 0) {
        fetchedData.not_found.forEach((card) => {
          errors.push("❌ carta non presente nel database di scryfall: " + card.name);
        });
      }
      return fetchedData.data;
    } catch (error) {
      errors.push("❌ Errore con la connessione a Scryfall: " + error.message);
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
    noBasicsList.forEach(line => {
      if (line.quantity > 4) errors.push(`❌ Ci sono ${line.quantity} copie di ${line.cardName}`);
    });
  }

  inputCheck(inputText);
  if (errors.length > 0) return { errors: errors, cardsList: null };

  quantityCheck();
  if (errors.length > 0) return { errors: errors, cardsList: null };

  const scryfallList = await existCheck()
  if (errors.length > 0) return { errors: errors, cardsList: null };

  legalityCheck(scryfallList);
  if (errors.length > 0) return { errors: errors, cardsList: null };

  deckDataParser(scryfallList);
  maxCopiesCheck();
  if (errors.length > 0) return { errors: errors, cardsList: null };

  return { errors: errors, cardsList: noBasicsList }
}

export { deckValidator }