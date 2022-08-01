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
    let introNumber = prompt('Please enter a numbre between 1 and 50');
    return introNumber;
}

function checkValue(value){
    /* Comprovem si es NUMERO */
    /* -- Podem fer servir la funcio isNaN que es dira si NO es un NUMERO (Not_A_Number) */
    /* -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN */
    /* NOTA: Number.isNaN(valor) es TRUE si No es un numero, per tant !Number.isNaN(valor) retorna TRU si ES un numero, pq el simbol "!" es la negacio del qeu ve despres */
        if(!Number.isNaN(value)){}else{return false}
    /* Comprovem si es ENTER */
    */ -- Podem fer servir parseInt o validar pel typeOf .... */
        if(value==parseInt(value)){}else{return false}
    /* Comprovem si es POSITIU */
    /* -- si em arribat aqui, podem saltar-nos aquest pas i validar si esta entre 1 i 50 directement */
    /* Comprovem si es >=1 */
        if(value>=1){}else{return false}
    /* Comprovem si es <=50 */
    /* -- per fer les coses de manera una mica variada aqui farem servir la funcio ifthenElse reduida ..... */
    /* -- condition ? exprIfTrue : exprIfFalse */
    /* -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
        (value<=50) ? console.log("seguim!) : return false;
    
    /* Si tot esta be, podem validar el valor retornat TRUE */
        return true
}

function nonvalidData(){
    if(n1ok==false){
        /* Vaja, el valor 1 no es bo */
        alert("Value num1 is NOT valid!!!");
        /* Acabem la funcio */
        break
    }else{
        /* Es bo ... doncs mirem el 2 ..... */
    }

    if(n2ok==false){
        /* Vaja, el valor 2 No es bo */
        alert("Value num2 is NOT valid!!!");
        /* Acabem la funcio */
        break
    }else{
        /* Es bo, podem acabar be .... */
    }

    /* Com tots dos son bons, podem acabar el bucle while, aixi que */
    numValidated=true;
}

function introNumber(){
/* Farem un bucle que rebi les dades i comprovi si so bones, si no ho son, doncs repetirem la entrada */
    while(numValidated){
        num1=requestValue()
        num2=requestValue()
        n1ok = checkValue(num1)
        n2ok = checkValue(num2)
        nonvalidData()
    }
}


/*-----------------------------------*/

/*var operator1 = 50;
var operator2 = 1;

function explainVar(){
    operator1 = 50;
    console.log(operator1);
}

explainVar();

var result = (operator1 + operator2);
console.log(result);*/

/*if (operator1 <0 &&  operator1 >51 ) 
{console.log ('ok continue')}
else {console.log('please try again')}*/


/*prompt (operator1);
prompt (operator2);
if ( operator1 || operator2 < 0 && operator1 || operator2 > 51 ) {console.log
('continue');}
else {console.log ('please enter a value between 1 and 50')
}*/

/*if (operator1 > 1 && operator1 < 51 )
{console.log('continue')}
else{console.log('try again')};

alert ('introduce operator');

function fidel (){
var name = prompt('team name');
var color = prompt('team color');
fidel.name = name;
fidel.color = color;
}

fidel();
alert (fidel.name + ',' + fidel.color);

let nombre;

nombre = prompt("Introduce tu nombre");

if (nombre != null){
	document.write("Bienvenido/a a mi sitio web, " + nombre + ".");
} else {
	alert("No has introducido nada. Recarga la página para intentarlo de nuevo.");
}*/


