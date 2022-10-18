const arr = [1,2,3,4,5,6]

// arr.forEach(ele => {
//     console.log(ele)
// });

// arr.map((ele) => {
//     console.log(ele + 2)
// })

let reducedArr = arr.reduce((a,b) => {return a += b})