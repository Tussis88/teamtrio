// deckValidator() controlla i singoli mazzi. Poi creerò una seconda funzione che checkerà i 3 mazzi con deckValidator e, se errors sarà vuoto prenderà parsedInput 
// ParsedInput deve essere cambiato: deckValidator dirà già se il mazzo è legale in pauper ed è corretto. Quindi devo solo dare come output i nomi delle singole carte non terra base del mazzo come array.
// La funzione trioValidator creerà un set con i 3 output di deckValidator e checkerà la lunghezza del set. Se il sest è lungo tanto quanto la somma della lunghezza dei 3 array allora non ci sono doppioni. Altrimenti significa che c'erano doppioni.

function deckValidator(text) {
  const errors = [];
  const parsedInput = [];

  const getErrors = () => errors;
  const getData = () => parsedInput;

  const clearData = () => {
    errors.length = 0;
    parsedInput.length = 0;
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

  const scryfallCheck = async () => {
    const url = "https://api.scryfall.com/cards/collection/";

    const cardNames = parsedInput.map(card => ({ name: card.cardName }));
    const cardRequest = new Request(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ identifiers: cardNames })
    });

    try {
      const response = await fetch(cardRequest);
      if (!response.ok) {
        throw new Error("Errore con la connessione a Scryfall: " + response.status);
      }

      const result = await response.json();
      if (result.not_found.length > 0) {
        errors.push("❌ Le seguenti carte non sono presenti nel database di Scryfall: " + result.not_found.map(line => line.name).join(", "));
      }
      return result.data;
    } catch (error) {
      alert(error.message);
    }
  }

  inputParser();
  quantityCheck();
  if (errors.length > 0) return;
  scryfallCheck().then((result) => {
    console.log(result);
  });

  return { getErrors, getData, inputParser, quantityCheck }
}

export { deckValidator }
