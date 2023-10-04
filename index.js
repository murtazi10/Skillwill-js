// Homework 1
function calculate(a, b) {
    if(a === b){
        return true
    }
    else if(a !== b){
        return false
    }
    
}

console.log(calculate(100,100))
console.log(calculate("100",100))
console.log(calculate(10,30))




// Homework 2
function fahrenheit (temperature) {
    if(typeof temperature === 'number' ){
        return (temperature - 32) * 5 / 9
    }
    else if(typeof temperature !== 'number'){
        return false
    }
    
}

console.log(fahrenheit(100))
console.log(fahrenheit("gguyf"))




// Homework 3
function calculate (a, b, operation){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return false
    }
    if(operation === '+'){
        return a + b
    }
    else if(operation === '-'){
        return a -b
    }
    else if(operation === '*'){
        return a *b
    }
    else if(operation === '/'){
        return a / b
    }
    else{
        return false
    }

}

console.log(calculate(10,10,'*'))
console.log(calculate(10,'five','*'))
console.log(calculate(10,10,'addition'))
console.log(calculate(10,33,'+'))
console.log(calculate(100,37,'-'))
console.log(calculate(200,10,'/'))