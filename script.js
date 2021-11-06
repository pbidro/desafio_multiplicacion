var number = () => {

    let a = parseInt(prompt("Ingresa un numero"));

    if (a > 0 && a <= 10 ){
        alert(` el factorial de ${a} es ${factorial(a)}`);
    }
    else {
        alert("Ingresa un numero entre 1 y 10");
    }   

}

var factorial = (numero) => {
//simple loop for with log
var factorial= 1;
var stop = numero;
for (var i = 1; i <= stop; i++) {
    console.log('i = ',i);
    for(var j = 1; j <=1; j++) {
        console.log('j = ',j);
        factorial = factorial * i;
        console.log('factorial = ',factorial);
    }   
}

    return factorial;
}


number()