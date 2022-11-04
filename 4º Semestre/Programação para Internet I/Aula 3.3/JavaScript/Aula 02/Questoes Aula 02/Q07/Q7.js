// 7. Escreva uma função chamada ehPrimo que receba um número e retorne se esse número é primo ou não. 
// Utilize a chamada dessa função em um loop para listar todos os números primos entre 2 e 30.


function primo(x){
    for(let i=2;i<=x-1;i++){
        if(x%i === 0){
            return false
        }
    }
    return true
}

//console.log("Numero: "+10+ " "+primo(10))

for(let i=2;i<=30;i++){
    if(primo(i)){
        console.log("Numero: "+i)
    }
    
}