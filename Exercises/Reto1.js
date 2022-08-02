/*Challenge1 -JavaScript*/
/*To generate a programm that use two numbers between one and fifty
and then show the following:
a-Result of addition operation (num1+num2=result to be shown).
b-Indicate if used numbers are prime numbers or not 
(num1 || num2 ==prime numbre true/false).
c-Indicate if used numbers are even numbers or not (odd) 
(num1 || num2 ==even number true/false).
d-Indicate if number1 is less than number2 and show range between
 number1 and number2 even numbers following ascending order.
e)-Indicate if number1 is greater than number2 and show range between
 number1 and number2 odd numbers following descending order.
f)-If number1 is equal to number2 show one time prime or even number and range
 of this number also.
g)-In case numbers are out of requested condition you have to communicate user.*/


/*PRIME NUMBERS 1 to 50
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47

EVEN NUMBERS 1 to 50
2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 48, 50
 Un número par se obtiene al multiplicar dos por cualquier número natural.
 Es por ello que podemos concluir que:
 Los números pares son los que terminan en 0, 2, 4, 6, 8.

ODD NUMBERS 1 to 50
1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49*/





console.log('JavaScript Funciona')


/* Global Variable definition*/
    var num1=0;
    var num2=0;
    var n1ok=false;
    var n2ok=false;
    var numValidated=false;
 
/* Auxiliar Functions definition */

function requestValue(){
    /* NOTE: inputs are always STRINGS !!!!!! */
    let introNumber = prompt('Please enter a number between 1 and 50');
    return introNumber;
}

requestValue();


/*function checkValue(value){
    if(!Number.isNaN(value)){else {return false}};
    
    if(value==parseInt(value)){else{return false}};
}



checkValue();*/


    /* Comprovem si es NUMERO */
    /* -- Podem fer servir la funcio isNaN que es dira si NO es un NUMERO (Not_A_Number) */
    /* -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN */
    /* NOTA: Number.isNaN(valor) es TRUE si No es un numero, per tant !Number.isNaN(valor) retorna TRU si ES un numero, pq el simbol "!" es la negacio del qeu ve despres */

    /* Comprovem si es ENTER */
    /* -- Podem fer servir parseInt o validar pel typeOf .... */