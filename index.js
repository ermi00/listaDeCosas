let input = document.getElementById("input")
let ul = document.getElementById("ul");
let contador = 0

function agregarElemento() {
  let li = document.createElement("li")
  let nombreTarea = input.value
  contador++
  li.id = contador
  li.innerHTML = `${nombreTarea} <button onclick="eliminarElemento(${li.id})">quitar</button>`;
  ul.appendChild(li);
}

function eliminarElemento(id){
  let li = document.getElementById(`${id}`)

  li.remove()
}
