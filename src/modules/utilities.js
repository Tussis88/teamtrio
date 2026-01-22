async function scryfallFetch(fetchedInput) {
  const url = "https://api.scryfall.com/cards/collection/";

  const cardNames = fetchedInput.map(card => ({ name: card.cardName }));
  const cardRequest = new Request(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ identifiers: cardNames })
  });

  const response = await fetch(cardRequest);
  if (!response.ok) {
    throw new Error("❌ Errore con la connessione a Scryfall: " + response.status);
  }

  return await response.json();
}


function inputParser(text){
  const lines = text.trim().split("\n");

  const parsedText = [];
  const errors = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "") continue;
    const match = lines[i].match(/^(1?[1-9]|10|20)\s{1,2}(.+)$/);

    if (match) {
      parsedText.push({
        quantity: parseInt(match[1]),
        cardName: match[2].trim()
      });
    } else {
      errors.push(`❌ Errore in questa riga:  ${lines[i]}`);
    }
  }

  return {parsedText, errors}
}

export { scryfallFetch, inputParser }
