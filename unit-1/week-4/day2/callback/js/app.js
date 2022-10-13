const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// There is an array I want you to grab a middle element and move it to the left.
// stop when that middle element is at its most left
// console logging it every time a move has been made
// [1, 2, 3, 4, 5, 6, 7, 8, 10] <----- starting
// [1, 2, 3, 5, 4, 6, 7, 8, 10]
// [1, 2, 5, 3, 4, 6, 7, 8, 10]
// [1, 5, 2, 3, 4, 6, 7, 8, 10]
// [5, 1, 2, 3, 4, 6, 7, 8, 10]

const moveLeft = (data) => {
    const midIndex = Math.floor(data.length / 2 - 1) // get middle index
    const target = data[midIndex] // Identifying the num that needs to be moved

    for(let i = midIndex - 1; i >= 0; i-=1){
    // create a for loop that loops the number of times that needs to be made
        data[i + 1] = data[i] // Takes the value at index i and copies it over to the right
        data[i] = target//replace the value at i with our number to be moved

        console.log(data)
    }
}


moveLeft(arr);