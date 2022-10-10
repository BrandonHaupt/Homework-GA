let array = [41, 0, -1, -37, 14, -19, 73, -10, -3, 4]

let negNum = array.filter(negNumFilter)

function negNumFilter(array) {
    return array >= 0
}

console.log(negNum)
