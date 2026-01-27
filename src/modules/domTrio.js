import {teamValidator} from "./teamValidator";

function pageRenderer() {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const title = document.createElement("h1");
  title.innerText = "Controllo Team Trio";
  container.appendChild(title);

  const form = document.createElement("form");
  container.appendChild(form);

  const areas = []
  for (let i = 1; i < 4; i++) {
    const label = document.createElement("label");
    label.innerText = "Mazzo " + i;
    label.htmlFor = "mazzo " + i;
    form.appendChild(label);

    const textarea = document.createElement("textarea");
    textarea.id = "mazzo " + i;
    form.appendChild(textarea);
    areas.push(textarea);
  }

  const button = document.createElement("button");
  button.innerText = "Controlla";
  form.appendChild(button);
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const deck1 = areas[0].value;
    const deck2 = areas[1].value;
    const deck3 = areas[2].value;
    //inserire qui errorRender con il risultato di teamValidator.. una roba tipo errorRenderer(teamValidator(deck1, deck2, deck3), messageDiv). Solo con l'await, boh.
    messageDiv.textContent = "attendi...";
  });

  const messageDiv = document.createElement("div");
  container.appendChild(messageDiv);
}

function errorRenderer(result, messageDiv) {
  if (result === null) {
    messageDiv.textContent = "I mazzi sono corretti!";
    return;
  }
  // creare i 3 campi per gli errori di ogni singolo mazzo
}

export { pageRenderer };