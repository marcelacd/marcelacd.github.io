function generarPokemones() {
  BorrarPokemones();

  const valor = document.getElementById("numero-pokemones").value;

  for (var i = 0; i <= valor; i++) {
    getPokemones(i);
  }
}

function getPokemones(id) {
  const options = { method: "GET" };

  fetch("https://pokeapi.co/api/v2/pokemon/" + id, options)
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      pintarPokemon(res);
    })
    .catch((err) => console.error(err));
}

function pintarPokemon(pokemon) {
  let name = pokemon.name;
  let image = pokemon.sprites.front_default;
  let type = ''
  pokemon.types.map(t => {
    // console.log(t.type.name)
    type = t.type.name
  })

  const content = document.getElementById("principal");

  content.innerHTML += `
    <div class="card" onmouseover="pintar(this)" onmouseout="despintar(this)">
       <div class="col-md-4 card-img">
           <img src="${image}" alt="${name}">
           <h5 id="evento">${type[0].toUpperCase() + type.substring(1)}</h5>
        </div>
        <div class"card-title">
          <p>${name[0].toUpperCase() + name.substring(1)}</p>
        </div>
    </div>
    `;
}

function pintar(x) {
  console.log(x)
  x.children[0].children[1].style.display = "block"
}

function despintar(x) {
  x.children[0].children[1].style.display = "none"
}

function BorrarPokemones() {
  const content = document.getElementById("principal");
  content.innerHTML = ``;
}

function cambiarColores() {
  const element = document.body;
  element.classList.toggle("seconday-color");
}
