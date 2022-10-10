import pokemon from './pokemon.json' assert {type: 'json'}

let poke = []

for (let p in pokemon) {
  poke.push(pokemon[p])
  poke.flat()
  console.log(poke)
}
