// const hi = () => {
//     console.log('Hi')
// }

// const foo = (p) => {
//     p()
// }

// foo(hi)

// const slicerDicer = () => {
//     console.log("Slicin and Dicin")
// }

// const electricMixer = (attachment) => {
//     console.log(`This mixer is now: ${attachment}`)
// }

// electricMixer(slicerDicer)

// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// const baz = (param) => {
//     console.log(param.toUpperCase());
// }

// foo(baz, 'hello')


const wordReverse = (word) => {
    console.log(word.split(" ").reverse("").join(" "))
    // console.log(reverse)
}

const toUpperCase = (word) => {
    console.log(word.toUpperCase())
}

// console.log(toUpperCase("tacos"))

const repMaster = (param, param2) => {
    (param2(param) + " proves that I am the rep MASTER!")
}

//"blockhead a to heart your give never proves that I am the rep MASTER!"
repMaster("Never give your heart to a blockhead", wordReverse);

//"I FINISHED THIS PRACTICE proves that I am the rep MASTER
repMaster("I finished this practice", toUpperCase);

