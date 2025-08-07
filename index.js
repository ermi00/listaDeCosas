let input = document.getElementById("input");
let divContenido = document.getElementById("divContenido");
let span = document.getElementById("span");
let sonidoEliminar = new Audio("./assets/eliminar.wav");
let agregarSonido = new Audio("./assets/agregar.wav");
let visitas = localStorage.getItem("visitasPagina");

function agregarElemento() {
  let div = document.createElement("div");
  let nombreTarea = input.value;
  let sonido = agregarSonido.cloneNode();
  event.preventDefault();

  if (nombreTarea == "") {
    span.innerHTML = "Intenta escribir algo primero";
    return;
  } else {
    span.innerHTML = "...";
    div.id = Math.random();
    div.className = "divGenerico";
    div.innerHTML = `<p>${nombreTarea}</p> <button onclick="eliminarElemento(${div.id})">ELIMINAR</button>`;
    divContenido.appendChild(div);
    localStorage.setItem(`${div.id}`, `${nombreTarea}`);
    span.innerHTML = "Tarea agregada";
  }
  sonido.play();
  input.value = "";
}

function eliminarElemento(id) {
  let sonido = sonidoEliminar.cloneNode();
  let div = document.getElementById(`${id}`);
  div.remove();
  localStorage.removeItem(id);
  sonido.play();
}

for (
  let i = 0;
  i < localStorage.length && i != localStorage.key("visitasPagina");
  i++
) {
  let id = localStorage.key(i);
  let nombre = localStorage.getItem(id);
  span.innerHTML = `Parece que has estado aqui ${visitas} veces`;
  let div = document.createElement("div");
  div.id = id;
  div.className = "divGenerico";
  div.innerHTML = `<p>${nombre}</p><button onclick="eliminarElemento(${div.id})">ELIMINAR</button>`;
  divContenido.appendChild(div);
}

visitas++;
localStorage.setItem("visitasPagina", visitas);
span.innerHTML = `Parece que has estado aqui ${visitas} veces`;
