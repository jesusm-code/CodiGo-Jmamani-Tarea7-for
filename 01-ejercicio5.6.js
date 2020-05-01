// 5.6 Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.
let vectorNombres = ["Jose", "Jesus", "Jorge", "Juan", "Pablo"];
let vectorEdades = [20, 30, 40, 25, 34];
let n = 5
for(let i = 0; i < n-1; i++){
    if (vectorEdades[i]>vectorEdades[i+1]){
        indice = i;
    }else{indice =i+1;}
}
console.log(`El mayor es: ${vectorNombres[indice]} con ${vectorEdades[indice]}`);