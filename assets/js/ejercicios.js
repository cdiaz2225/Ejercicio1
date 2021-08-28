
let n = 5   //Ejercicio 1
let m = 10
console.log(n+m)


let a = 2   //Ejercicio 2
let b = 5
let c = 10
let d = 8
let e = 7
let z = (a*b*c*d*e)
console.log(z)


let x=2     //Ejercicio 3
let y=6
let otro_z=8
console.log((x + otro_z) * y * y)


let otro_a = "hola "    //Ejercicio 4
let otro_b = "mundo"
console.log(otro_a+otro_b)


let a1="5"  //Ejercicio 5
let b1="3"
let c1="7"
let d1=a1+b1+c1
console.log(a1+" + "+b1+" + "+c1+" = " + d1)


let usuario1 = { nombre: "juan", apellido: "perez" }        //Ejercicio 6
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }

a=13

switch(a){
    case 1:
        console.log("Hola, "+usuario1.nombre+" "+usuario1.apellido)
        break
    case 2:
        console.log("Hola, "+usuario2.nombre+" "+usuario2.apellido)
        break
    case 3:
        console.log("Hola, "+usuario3.nombre+" "+usuario3.apellido)
        break
    case 4:
        console.log("Hola, "+usuario4.nombre+" "+usuario4.apellido)
        break
    case 5:
        console.log("Hola, "+usuario5.nombre+" "+usuario5.apellido)
        break
    case 6:
        console.log("Hola, "+usuario6.nombre+" "+usuario6.apellido)
        break
    case 7:
        console.log("Hola, "+usuario7.nombre+" "+usuario7.apellido)
        break
    case 8:
        console.log("Hola, "+usuario8.nombre+" "+usuario8.apellido)
        break
    default:
        console.log("Usuario no Registrado")
        break
}


let json = [{'nombre': 'juan', 'apellido': 'perez'} ,{'nombre': 'sara', 'apellido': 'aparicio'}]
for (dato in json){
    console.log("Hola ",json[dato])
}

// Ejercicio 7

a=10
b=8

if (a > b) {
    console.log("A es mayor que B")
} 
else {
    console.log("B es mayor que B")
}


//Ejercicio 8
a=10
b=10

if (a > b) {
    console.log("A es mayor que B")
} 
else if (a < b) {
    console.log("B es mayor que B")
}
else {
    console.log("A es igual a B")
}


// Ejercicio 9
n=9

if ((n%2)==0) {
    console.log("Es Par")
} else {
    console.log("Es Impar")
}


// Ejercicio de Peliculas
// a Todo Público
// b Desde 9 años
// c Desde 18 años
// d dede 25 años


let edad=prompt("Ingrese edad")
let categoria=prompt("Ingrese categoría A, B, C, D").toUpperCase()

switch (categoria){
case "A":
    alert("Puede entrar cualquer edad")
    break
case "B":
    if (edad>=9) {alert("Si puede ver Categoria B") }
    else {alert ("PARA LA CASA")}
    break
case "C":
    if (edad>=18) {alert("Si puede ver Categoria C")}
    else {alert ("PARA LA CASA")}
    break
case "D":
    if (edad>=25) {alert("Si puede ver Categoria D")}
    else {alert ("PARA LA CASA")}
    break
default:
    alert ("PARA LA CASA")
    break
}

