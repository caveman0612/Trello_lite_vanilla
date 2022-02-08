const boardData = [];

boardData.push({ title: "Applied", cards: ["Jack", "Kyle"] });
boardData.push({ title: "interested", cards: ["Steve", "Rodney"] });

boardData.forEach((item) => {
  const folder = makeEmptyFolder(item.title);
  item.cards.forEach((card) => {
    addingCards(folder, card);
  });
});

function makeEmptyFolder(title) {
  const board = document.querySelector(".board");

  const newButton = document.querySelector(".newButton");

  const folder = document.createElement("div");
  folder.classList.add("folder");

  const h1 = document.createElement("h2");
  h1.classList.add("title");
  h1.innerHTML = title;

  const ul = document.createElement("ul");
  ul.classList.add("cards");

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("placeholder", "Add New Card");

  form.appendChild(input);

  const button = document.createElement("button");
  button.classList.add("submit");
  button.setAttribute("type", "submit");

  form.appendChild(button);

  folder.appendChild(h1);
  folder.appendChild(ul);
  folder.appendChild(form);
  board.insertBefore(folder, newButton);
  return folder;
}

function addingCards(folder, cardName) {
  const ul = folder.querySelector(".cards");
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = cardName;
  ul.appendChild(li);
}
