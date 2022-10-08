import pokemon from './pokemon.json' assert {type: 'json'}

console.log(pokemon)
pokemon.forEach(poke => {
    console.log(poke.name)
});