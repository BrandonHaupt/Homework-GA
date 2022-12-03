// Javascript loop through array of objects and add property

const arr = [
    {
        name: "Seaseme Seed Bun",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/big_mac_bun",
    },
    {
        name: "100% Beef Patty",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/10_1_patty",
    },
    {
        name: "Shredded Lettuce",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce",
    },
    {
        name: "Big Mac Sauce",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce",
    },
    {
        name: "American Cheese",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180",
    },
    {
        name: "Pickle Slices",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/pickles",
    },
    {
        name: "Onions",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/reconstituted_onions",
    }
]


function oddA() {
    let newArray = []
    arr.forEach(e => {
        if (e % 2 === 0) {
            return newArray.push(e)
        }
    });
    console.log(newArray)
}

function addID() {
    arr.forEach(a => {
        a.id = "test"
    });
    
    console.log(arr)
}

function reverseArray() {
    let array_reveresed = []
    arr.forEach((e) => {
        array_reveresed.unshift(e)
    })
    console.log(array_reveresed)
}



addID()
reverseArray()
oddA()