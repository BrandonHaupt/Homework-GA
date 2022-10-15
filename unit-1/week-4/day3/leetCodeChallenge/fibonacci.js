const fib = function(n){
    let collection = [0,1]

    for(let i = 2; i <= n; i+=1){

        collection.push(collection[i-1] + collection[i-2]);

    }
    console.log(collection)
}

fib(8)