
const itemTemplate = ({id, isDone, text}) => 
`<li data-id="${id}">
<label>
  <input type="checkbox" checked=${isDone ? "cheked" : ""} />
  <span>${text}</span>
</label>
</li>`;

const listItems = [
  { id: 1, text: 'milk', isDone: false },
  { id: 2, text: 'fruits', isDone: true },
  { id: 3, text: 'bread', isDone: false },
  { id: 4, text: 'tea', isDone: true },
  { id: 5, text: 'cola', isDone: false },
]

const refrs = {
  body: document.querySelector('body'),
}

const createForm = () => {
  const form = document.createElement('form')
  const label = document.createElement('label')
  const span = document.createElement('span')
  const input = document.createElement('input')
  const button = document.createElement('button')

  span.textContent = 'Enter text'
  input.type = 'text' // input.setAttribute("type", "text");
  input.name = 'text' // input.setAttribute("name", "text");

  button.type = 'submit'
  button.textContent = '+Add'

  label.append(span, input)
  form.append(label, button)
  refrs.body.appendChild(form)

  console.log(label)
}

const createList = () => {
  const ul = document.createElement('ul')

  const list = listItems.map(itemTemplate).join(""); // щоб забрати коми, бо ми вставили текст як масив

  ul.insertAdjacentHTML("beforeend", list); // вставили лі в список як масив, вони ідуть через кому
  
  refrs.body.appendChild(ul);
};

createForm();
createList();
