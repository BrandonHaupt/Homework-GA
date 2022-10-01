const cheese = ["cheese1", "Cheese 2", "Cheese 3"]

cheese.push("cheese 4")
cheese.unshift("cheese 0")

cheese.pop()
cheese.shift()

cheese[2] = "Cheese"

cheese.forEach(cheeses => console.log(cheeses))


const numbers = [1,2,3, [4,5,6,[7,8,9]]]

console.log(numbers[3][1]) //5

console.log(numbers[1]) //2

console.log(numbers[3][3][2]) //9