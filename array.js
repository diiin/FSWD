let array = [
    99, 33, 46, 33, 48, 2, 10, 14, 4, 45, 87, 35, 78, 20, 22, 67, 98, 55, 11, 45,
    45, 23, 78, 23, 67, 97, 55, 34, 23, 67, 34, 78, 66, 23, 66, 12, 14, 78, 89, 44,
    87, 67, 45, 57, 93, 23, 33, 45, 23, 56, 57, 22, 77, 78, 34, 68, 89, 45, 23, 55,
    34, 67, 78, 34, 12, 35, 56, 68, 89, 45, 33, 23, 45, 67, 67, 78, 45, 23, 45, 56,
    33, 34, 56, 72, 73, 46, 56, 78, 45, 23, 78, 89, 45, 66, 34, 22, 69, 96, 77, 59,  
];
let arrayGenap = [];
let arrayGanjil = [];
let min = array [0];
let max = array [0];
let total = 0;
let avg = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        arrayGenap.push(array[i]);
    } else {
        arrayGanjil.push(array[i]);
    }
} 

for (let i = 0; i < array.length; i++ ) {
    if (array[i] < min) {
        min = array[i];
    }

    if (array[i] > max) {
        max = array[i];
    }

    total += array[i];
}

avg = total / array.length;

console.log("Array Genap: " + arrayGenap);
console.log("Array Genap: " + arrayGanjil);

console.log("Nilai Minimum: " + min);
console.log("Nilai Maximum: " + max);
console.log("Nilai Total: " + total);
console.log("Nilai rata-Rata: " + avg);