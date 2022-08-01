/*-----------------------------------------------------------------------------------

function checkValue(value){
    /* Comprovem si es NUMERO */
    /* -- Podem fer servir la funcio isNaN que es dira si NO es un NUMERO (Not_A_Number) */
    /* -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN */
    /* NOTA: Number.isNaN(valor) es TRUE si No es un numero, per tant !Number.isNaN(valor) retorna TRU si ES un numero, pq el simbol "!" es la negacio del qeu ve despres 
        if(!Number.isNaN(value)){else}{return false}};
    /* Comprovem si es ENTER */
    /* -- Podem fer servir parseInt o validar pel typeOf .... */
    if(value==parseInt(value)){else{return false};
    /* Comprovem si es POSITIU */
    /* -- si em arribat aqui, podem saltar-nos aquest pas i validar si esta entre 1 i 50 directement */
    /* Comprovem si es >=1 */
        if((value)>=1){else{return false};
    /* Comprovem si es <=50 */
    /* -- per fer les coses de manera una mica variada aqui farem servir la funcio ifthenElse reduida ..... */
    /* -- condition ? exprIfTrue : exprIfFalse */
    /* -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
        (value<=50) ? console.log ("seguim!") : return false;
    
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

introNumber();



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


