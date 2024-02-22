
//este es un comentario
let claves = ["HACER","HOLA","CLAVE","MOTOR","HACHA","ACTOR","CURSO"];
let numero = [0,1,2,3,4];

function generarNumero(){
    return Math.floor(Math.random() * numero.length);
}
numeroAdivinar = [generarNumero(),generarNumero(),generarNumero()];

//console.log("El número a adividar es: "+ numeroAdivinar[0] + numeroAdivinar[1] + numeroAdivinar[2]);

let i1 = 0;
let i2 = 0;
let i3 = 0;
let numeroSeleccionado = [];
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let n3 = document.querySelector('#n3');
let input = document.getElementById('input');



let btnN1S = document.getElementById('btnsube1');
btnN1S.onclick = sube;
let btnN1B = document.getElementById('btnbaja1');
btnN1B.onclick = baja;


let btnN2S = document.getElementById('btnsube2');
btnN2S.onclick = sube2;
let btnN2B = document.getElementById('btnbaja2');
btnN2B.onclick = baja2;


let btnN3S = document.getElementById('btnsube3');
btnN3S.onclick = sube3;
let btnN3B = document.getElementById('btnbaja3');
btnN3B.onclick = baja3;





let btnResultado = document.getElementById('btnResultado');
btnResultado.onclick = resultado;



function sube(){
    if(i1<numero.length-1){
        i1++;
         n1.innerHTML = numero[i1];
         numeroSeleccionado[0] = numero[i1];
         console.log("NUMERO SELECCIONADO POS 1: " + numeroSeleccionado[0] );
    } else {
        i1 = 0;
        n1.innerHTML = numero[i1];
        numeroSeleccionado[0] = numero[i1];
        console.log("NUMERO SELECCIONADO POS 1: " + numeroSeleccionado[0] );
    }
    
};

function baja(){
    if(i1>0){
        i1--;
        n1.innerHTML = numero[i1];
        numeroSeleccionado[0] = numero[i1];
        console.log("NUMERO SELECCIONADO POS 1: " + numeroSeleccionado[0] );
    } else {
        i1 = numero.length-1;
        n1.innerHTML = numero[i1];
        numeroSeleccionado[0] = numero[i1];
        console.log("NUMERO SELECCIONADO POS 1: " + numeroSeleccionado[0] );
    }  
    
};

// FUNCION NUMERO 2

function sube2(){
    if(i2<numero.length-1){
        i2++;
    n2.innerHTML = numero[i2];
    numeroSeleccionado[1] = numero[i2];
    console.log("NUMERO SELECCIONADO POS 2: " + numeroSeleccionado[1] );
    } else {
        i2 = 0;
        n2.innerHTML = numero[i2];
        numeroSeleccionado[1] = numero[i2];
        console.log("NUMERO SELECCIONADO POS 2: " + numeroSeleccionado[1] );
    }
    
};

function baja2(){
    if(i2>0){
        i2--;
        n2.innerHTML = numero[i2];
        numeroSeleccionado[1] = numero[i2];
        console.log("NUMERO SELECCIONADO POS 2: " + numeroSeleccionado[1] );
    } else {
        i2 = numero.length-1;
        n2.innerHTML = numero[i2];
        numeroSeleccionado[1] = numero[i2];
        console.log("NUMERO SELECCIONADO POS 2: " + numeroSeleccionado[1] );
    }  
    
};

//FUNCION NUMERO 3

function sube3(){
    if(i3<numero.length-1){
        i3++;
    n3.innerHTML = numero[i3];
    numeroSeleccionado[2] = numero[i3];
    console.log("NUMERO SELECCIONADO POS 3: " + numeroSeleccionado[2] );
    } else {
        i3 = 0;
        n3.innerHTML = numero[i3];
        numeroSeleccionado[2] = numero[i3];
        console.log("NUMERO SELECCIONADO POS 3: " + numeroSeleccionado[2] );
    }
    
};

function baja3(){
    if(i3>0){
        i3--;
        n3.innerHTML = numero[i3];
        numeroSeleccionado[2] = numero[i3];
        console.log("NUMERO SELECCIONADO POS 3: " + numeroSeleccionado[2] );
    } else {
        i3 = numero.length-1;
        n3.innerHTML = numero[i3];
        numeroSeleccionado[2] = numero[i3];
        console.log("NUMERO SELECCIONADO POS 3: " + numeroSeleccionado[2] );
    }  
    
};



function resultado(){
    if(numeroSeleccionado[0] == numeroAdivinar[0] && numeroSeleccionado[1] == numeroAdivinar[1] && numeroSeleccionado[2] == numeroAdivinar[2]){
        alert("Adivinaste el número secreto");
    } else {
            
            if((numeroSeleccionado[0] == numeroAdivinar[0]) || (numeroSeleccionado[1] == numeroAdivinar[1]) || (numeroSeleccionado[2] == numeroAdivinar[2])){
                input.value = 'Uno o dos Digitos estan correctos';       
                
            }  else {
                input.value = 'Sigue intentando...'; 
            }
        }
};

let refresh = document.getElementById('refresh');
refresh.onclick = refreshP;

function refreshP(){
    location.reload();
}