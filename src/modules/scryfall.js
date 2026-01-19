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

export { scryfallFetch }
