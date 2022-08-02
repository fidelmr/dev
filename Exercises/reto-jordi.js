

  let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}








var numero1=0;
var numero2=0;
var n1ok=false;
var n2ok=false;
var numerosValidats=false;

function resultado(numero1, numero2) {
    return numero1 + numero2;   // The function returns the product of p1 and p2
  }

  console.log (resultado);
function prompt numero1 (valor1);

valor1();



if(!Number.isNaN(valor)){}else{return false}

if(valor==parseInt(valor)){}else{return false}

if(valor>=1){}else{return false}

condition ? exprIfTrue : exprIfFalse

(valor<=50) ? console.log("seguim!) : return false;

return true
    }


    funcion avisarEntradesInvalides(){
        if(n1ok==false){
            /* Vaja, el valor 1 no es bo */
            alert("Vaja! el numero1 NO es valid!!!");
            /* Acabem la funcio */
            break
        }else{
            /* Es bo ... doncs mirem el 2 ..... */
        }

        if(n2ok==false){
            /* Vaja, el valor 2 No es bo */
            alert(Vaja! el numero2 No es valid!!!");
            /* Acabem la funcio */
            break
        }else{
            /* Es bo, podem acabar be .... */
        }

        /* Com tots dos son bons, podem acabar el bucle while, aixi que */
        numerosValidats=true;
    }

    funcio entrada(){
    /* Farem un bucle que rebi les dades i comprovi si so bones, si no ho son, doncs repetirem la entrada */
        while(numerosValidats){
            numero1=demanarValor()
            numero2=demanarValor()
            n1ok = comprovaValor(numero1)
            n2ok = comprovaValor(numero2)
            avisarEntradesInvalides()
        }
    }

/* ***************** */
/* Codi principal */

    entrada();
    calcular();
    presentar();   