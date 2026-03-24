console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        continue;
        } 
        console.log(i);
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
//Ignore Even
let j = 1;

//While Loop
while (j <= 100){
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;     
}

//Do...While Loop
let k = 1;
do {
    if (k % 2 !== 0){
        console.log(k);
    }
    k++;
} while (k <= 100);


//FIZZBUZZ
//While Loop
let i = 1;

while (i <= 100) {
    let output = "";

    if (i % 3 == 0){
        output += "FIZZ";
    }

    if (i % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
    i++;
}

//Do...While Loop
let m = 1;

do {
    let output = "";

    if (m % 3 == 0){
        output += "FIZZ";
    }

    if (m % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${m} ${output}`);
    m++;
} while (m <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round(Math.random() * 500);
let x = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (let i = 0; i <= x; i++){
    if (i == value) {
    console.log(`Found ${value}!`);
    found = true;
    break;
    }
}

    if (!found){
        console.log(`Did not find ${value} within 1-${x}..`);
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++){
    let output = "";

    if (i % fizzDivisor == 0){
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }
    
    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);