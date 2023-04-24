//block14

//tab1 only odds
//write an algorithim that accepts an array of numbers and returns new array with only the odd numbers
//if there is only one odd number in original array then return an array with that single value

const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
const odds = []
for (const num of numbers) {
    if (num % 2 === 1) {
        odds.push(num);
    }
}
console.log(odds);


//tab2 vowel vs consonant
//write algorithm that accepts a string of lowercase letters
//print the word followed by how many consonants and vowels it has
//a, e, i, o, u are considered vowels
//all other letters are considered consonant

let string = prompt("Enter the stering");
let count = 0;
for(let i = 0; i < string.length; i++){
    let letter = string[i].toLowerCase();
    if(letter=='a'||letter=='e'|| letter == "i"||letter == 'o' || letter == 'u'){
        count++;
    }
}
console.log(count)



//tab3 reverse array
//write algorithm that creates a new array in reverse order

const array = [1, 2, 3]
const reversed = [...array].reverse()
console.log(reversed)
console.log(array)



//tab4 fizzbuzz
//write algorithm that prints each number from 1 to 100 on a new line
//for each multiple of 3, print "Fizz" instead of the number
//for each multiple of 5, print "Buzz" instead of the number
//for numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number

function fizzbuzz() {
    for(let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 --- 0) {
            console.log("FizzBuzz");            
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

