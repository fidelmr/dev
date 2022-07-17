console.log ('holJS');
/*console.log document.getElementById('saludo');*/
console.log (document.getElementById('saludo'));


let a = 5;
let b =6;

console.log (a);

a = 15;

console.log (a);

let c=1; let d=2; let e=3;
console.log ((c) + (d) +( e)) ;
console.log (c,d,e);

console.log ('el valor de c es: '  + c +   ', el valor de d es : ' +d);

function example() {
    console.log (c);
    let f= 5;
    console.log ( f );
  }

 example()

a=25;

a ++;

console.log (a);

g=30

g++;

console.log ('el valor de g es: ' + g );

console.log ( 'la comparación es: ' + (a == g) );

let f = (g);

console.log ('la comparación es: ' + ( f==g));

g != f;

console.log ('el resultado de comparar si g no es igual a f es:' + (g!=f));

let s= ('hola');
let r= ('holas');

console.log ( s==r );

console.log (s===r);

/*let t= '4';
let v= '4';*/
let t= 4;
let v= 4;

console.log (t===v);

let u= t+v;

console.log (u);
/*
CONCATENAR TEXTOS DEFINIDOS EN VARIABLES   */

t= 'Me llamo';
u= '  Fidel';

console.log (t+u);

/*PARSEINT parseInt*/

t='8';
u=10;

y= t+u;

console.log (y);

y= +t+10;

console.log (y);

y= parseInt (t)+ parseInt (u);

console.log(y);

/*CONDICIONALES*/
let ab=8
let cd=9

if (ab==cd) {
    console.log ('iguales');}
   else { console.log ('diferentes')};

let ef=25
let gh='25'

if (ef===gh) {console.log ('íguales en valor y tipo')}
else if (ef==gh) {console.log ('iguales en valor')}
else {console.log ('diferentes en valor y tipo')}



ij= (ef==gh) ? 'iguales' : 'diferentes'

console.log (ij);


/*OPERADORES LOGICOS*/

let ax = 25
let bz ='25'

if ((ax==bz)&&(bz=25)){console.log ('se cumple todo')}
else {(console.log ('hay algo diferente'))}

/*revisar y consultar*/


/*SWITCH*/


/*ALERT*/

alert ('Hola People');

/*PROMPT*/

/*prompt ('Escribe tu nombre');*/

let Nombre = prompt ('Escribe tu nombre');
console.log(' el nombre es :  ' + Nombre);

//Calculator Variables//
let operation = prompt("1-Addition 2-Substract 3-Multiply 4-Divide .");
let operator1 = parseInt(prompt("Introduce first operator number"));
let operator2 = parseInt(prompt("Introduce second  operator number"));
let result;

//Addition Function//
function addition (number1 , number2) {
  return number1 + number2;
}

//Substration Function//
function substract(number1 , number2) {
 return number1 - number2;
}

//Multiply Function//
function multiply(number1 , number2) {
  return number1 * number2;
}

//Divide Function//
function divide(number1 , number2) {
 return number1 / number2;
}

switch (operation) {
  case "1":
    result = addition (operator1 , operator2) 
      document.write ("Addition result is: " + result) ;
      break;

  case "2":
    result = substract (operator1 , operator2) 
      document.write ("Substract result is: " + result) ;
      break;

  case "3":
    result = multiply (operator1 , operator2) 
      document.write ("Multiply result is: " + result) ;
      break;
        
  case "4":
    result = divide (operator1 , operator2) 
      document.write ("Divide result is: " + result) ;
      break;

  default:
    alert ("No valid option for operation.") ;
    break;
            
}































