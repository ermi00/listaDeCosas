let input = document.getElementById("input");
let ul = document.getElementById("ul");

function agregarElemento() {
  let li = document.createElement("li");
  let nombreTarea = input.value;

  if (nombreTarea == "") {
    alert("Ingresa una tarea antes");
    return;
  } else {
    li.id = Math.random();
    li.innerHTML = `${nombreTarea} <button onclick="eliminarElemento(${li.id})">quitar</button>`;
    ul.appendChild(li);
    localStorage.setItem(`${li.id}`, `${nombreTarea}`);
  }
}

function eliminarElemento(id) {
  let li = document.getElementById(`${id}`);
  li.remove();
  localStorage.removeItem(id);
}

for (let i = 0; i < localStorage.length; i++) {
  let id = localStorage.key(i);
  let nombre = localStorage.getItem(id);

  let li = document.createElement("li");
  li.id = id;
  li.innerHTML = `${nombre} <button onclick="eliminarElemento(${li.id})">quitar</button>`;
  ul.appendChild(li);
}
