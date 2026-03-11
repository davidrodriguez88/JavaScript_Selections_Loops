console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++){
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        {
        console.log(i, "FIZZBUZZ");
    } else {if (i % 3 == 0){
        console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
    }
        }
}

// Exercise 3 Section

//Ignore Even
let i = 1;
while (i < 100){
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

let n = 1;

do {
    if (n % 2 !== 0){
        console.log(n);
    }
    n++;
} while (x < 100);

//FIZZBUZZ
let i = 1;

while (i <= 100){
    let outpout = "";

    if (i % 3 == 0){
        output += "FIZZ";
    }

    if (i % 5 == 0){
        output += "BUZZ";
    }

    console.log('${i} ${output}');

    i++;
}

let n = 1;

do {
    let outpout = "";

    if (n % 3 == 0){
        output += "FIZZ";
    }

    if (n % 5 == 0){
        output += "BUZZ";
    }

    console.log('${n} ${output}');

    n++;
} while (n <= 100);

// Exercise 4 Section
let value = Math.round((Math.random() * 500));
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500

for (let i = 1; i <= n; i++){
    if (i == value) {
    console.log('Found ${value!}');
    break;
    }
    if (i == n){
        console.log('Did not find ${value} withing 1-${n}..');
    }
}

// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++){
    let output = "";

    if (i % fizzDivisor == 0){
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0)
        output += "BUZZ";
    
    console.log('${i} ${output}');
}

console.log(fizzDivisor, buzzDivisor);