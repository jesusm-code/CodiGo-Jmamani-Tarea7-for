// 5.10 Realice un algoritmo que lea dos vectores de cien elementos y que calcule
// la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.
let vector1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let vector2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let vectorSuma =[];
let n = 10
for(let i = 0; i < n; i++){
    vectorSuma[i] = vector1[i] + vector2[i];
}
console.log(`El vertor suma es: [${vectorSuma}]`);
