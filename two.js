const weight = 70; 
const height = 1.75; 

const BMI = weight / (height ** 2);

let healthCategory;

if (BMI < 18.5) {
    healthCategory = 'Underweight';
} else if (BMI <= 24.9) {
    healthCategory = 'Normal';
} else if (BMI <= 29.9) {
    healthCategory = 'Overweight';
} else {
    healthCategory = 'Obese';
}

console.log(`BMI: ${BMI.toFixed(2)}`);
console.log(`Health Category: ${healthCategory}`);
