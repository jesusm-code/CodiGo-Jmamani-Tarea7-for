// 5.8 Realice un algoritmo que lea un vector y a partir de él forme un segundo
// vector, de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

let vector1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let vector2 = [];
let n = vector1.length;
for(let i = 0; i < n; i++){
    if(i<n-1){
        vector2[i+1] = vector1[i];
    }
    vector2[0] = vector1[i];
}
console.log(`Vector1: [${vector1}]`);
console.log(`Vector2: [${vector2}]`);