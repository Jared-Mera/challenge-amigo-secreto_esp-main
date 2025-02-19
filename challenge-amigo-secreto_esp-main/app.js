// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();
  
  // Validar que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }
  
  // Agregar el nombre al array
  amigos.push(nombreAmigo);
  
  // Actualizar la lista de amigos en la interfaz
  const lista = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nombreAmigo;
  lista.appendChild(li);
  
  // Limpiar el campo de entrada
  inputAmigo.value = "";
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  // Validar que exista al menos un amigo en la lista
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega al menos uno.");
    return;
  }
  
  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  
  // Mostrar el resultado en la interfaz
  const resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = ""; // Limpiar resultados anteriores
  const li = document.createElement("li");
  li.textContent = amigoSorteado;
  resultadoLista.appendChild(li);
}
