// 5. Escreva uma função que receba uma temperatura em Fahrenheit e retorne o valor em Celsius. 
//Modifique a questão 9 da lista anterior para chamar essa função dentro do loop ao construir a tabela.



/* let a=parseInt(process.argv[2]);
function Trasforma_Temperatura(temp_F){
    return (5/9)*(temp_F-32)
}
console.log(Trasforma_Temperatura(80))
 */


 function Trasforma_Temperatura(temp_F){
     return (5/9)*(temp_F-32)
 }
 for(let i=-50; i<=50; i+=5){
     let a =Math.round(Trasforma_Temperatura(i)) 
     console.log( `TEMP. EM F: ${i}  TEMP. EM C: ${a}` );
 }
