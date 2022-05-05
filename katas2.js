// comece a criar a sua função add na linha abaixo
    function add(a,b){
    
        return a + b
    
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
    function multiply(num1, num2){
        
        let resultMultiply = 0 
        for(let i = 1; i <= num1; i++){               

        resultMultiply = add (resultMultiply , num2)

        }

    return resultMultiply

}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
    function power (x,n){
    
        let resultPower = x
        for(let i = 1; i < n; i++){

            resultPower = multiply(resultPower,x)
        }

    return  resultPower

 }

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
    function factorial(num){
    
        let resultFactorial = num
        for(let i = 1; i < num; i++){
            resultFactorial = multiply(resultFactorial,(num-i))

        }

    return resultFactorial

}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(n){
    let fibonacci1=0
    let fibonacci2=1
    let resultadoFibonacci=0
     for(let i = 2; i <= n; i++){   
          resultadoFibonacci=add(fibonacci1,fibonacci2);    
          fibonacci1=fibonacci2;    
          fibonacci2=resultadoFibonacci;    
         }   
 return resultadoFibonacci

}

// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado')
