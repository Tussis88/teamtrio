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

  const messageDiv = document.createElement("div");
  container.appendChild(messageDiv);

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
    const decks = areas.map(area => area.value);
    teamValidator(...decks).then(result => errorRenderer(result, messageDiv));
    messageDiv.textContent = "attendi...";
  });
}

function errorRenderer(result, messageDiv) {
  if (result === null) {
    messageDiv.className = "noerror";
    messageDiv.textContent = "I mazzi sono corretti!";
    return;
  }
  messageDiv.textContent = "";
  messageDiv.className = "error";
  for (const deck of result) {
    const errorBlock = document.createElement("div");
    errorBlock.textContent = deck.join("\n");
    messageDiv.appendChild(errorBlock);
  }
}

export { pageRenderer };