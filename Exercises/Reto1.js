console.log('JavaScript Funciona')

var operator1 = 50;
var operator2 = 1;

function explainVar(){
    operator1 = 50;
    console.log(operator1);
}

explainVar();

var result = (operator1 + operator2);
console.log(result);

/*if (operator1 <0 &&  operator1 >51 ) 
{console.log ('ok continue')}
else {console.log('please try again')}*/


/*prompt (operator1);
prompt (operator2);
if ( operator1 || operator2 < 0 && operator1 || operator2 > 51 ) {console.log
('continue');}
else {console.log ('please enter a value between 1 and 50')
}*/

if (operator1 > 1 && operator1 < 51 )
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
}


