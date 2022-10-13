import pokemon from './pokemon.json' assert {type: 'json'}


let pokemonString = JSON.stringify(pokemon)

let poke = []

// for (let p in pokemonString) {
//     poke.push(pokemonString)
// }

for (let i = 0; i < pokemonString.length; i++) {
    const p = pokemon[i];
    poke.push(p)
}

console.log(poke)