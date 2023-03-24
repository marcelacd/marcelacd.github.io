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
  // console.log(x.children[0].children[1])
  x.children[0].children[1].style.display = "block"

  // console.log(x.children[1]);
  // x.style.height = "auto";
  // x.style.width = "250px";
}

function despintar(x) {
  x.children[0].children[1].style.display = "none"

  // x.style.height = "auto";
  // x.style.width = "166px";
  // document.getElementById("evento").style.display = "none"
  // console.log(x);
  // const content = document.getElementById("evento");
  // content.innerHTML = `
  // <p>Parrafo</p>
  // `;
  // var element = document.getElementById("evento");
  // element.classList.toggle("block");
}

function BorrarPokemones() {
  const content = document.getElementById("principal");
  content.innerHTML = ``;
}

function cambiarColores() {
  var element = document.body;
  element.classList.toggle("seconday-color");
}
