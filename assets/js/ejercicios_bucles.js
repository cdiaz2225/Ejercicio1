 // Ejercicio For 1
let n=prompt("Ingrese Número")
let lista=""
for (numero=0; numero<=n;numero++){
    if (lista.length==0){
        lista = numero}
    else{
    lista =  lista + "-" + numero}
}
console.log(lista)


// Ejercicio For 2
let n1=prompt("Ingrese Número")
let lista1=""
for (numero1=0; numero1<n1;numero1++){
    if (lista1.length==0){
        lista1 = numero1*-1}
    else{
    lista1 += ";" + (numero1*-1)}
}
console.log(lista1)

// Ejercicio For 3
let n2=prompt("Ingrese Número")
let suma=0
for (numero2=0; numero2<=n2; numero2++){
    suma += numero2 
}
console.log("Suma Total: "+ suma)
