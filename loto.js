function euroMill(max,min){

let numbers=[]
let arr1=[]
let arr2=[]
while (arr1.length<5){
    
    arr1.push(Math.floor(Math.random() * (max-1+1)+1))
    arr1.sort()
}
    while(arr2.length<2){
        
        arr2.push(Math.floor(Math.random() * (min-1+1)+1))
        arr2.sort()

    }

    numbers.push(...arr1,"/" ,...arr2)
    return numbers
}

let a =[]
a =euroMill(50,12)
a



function loto(max,chance){

    let numbers=[]
    let arr1=[]
    let arr2=[]
    while (arr1.length<5){
        arr1.push(Math.floor(Math.random() * (max-1+1)+1))
        arr1.sort()
    }
        while(arr2.length<1){
            arr2.push(Math.floor(Math.random() * (chance-1+1)+1))
            arr2.sort()
        }
        numbers.push(...arr1,"/" , ...arr2)
        return numbers
    }

let b =[] 
b=loto(50,10)
b   




