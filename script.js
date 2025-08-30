// Part 1: Mastering JavaScript Basics

// Variable declarations and conditionals
let age = prompt("Please enter your age:");

// Checking eligibility to vote
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Part 2: JavaScript Functions — The Heart of Reusability

// Function to calculate total price with tax
function calculateTotal(price, taxRate) {
    let tax = price * taxRate;
    let total = price + tax;
    return total;
}

// Example usage of calculateTotal function
let price = 100;
let taxRate = 0.08;
let totalPrice = calculateTotal(price, taxRate);
console.log("Total price with tax: $" + totalPrice);

// Function to format a string to uppercase
function formatString(input) {
    return input.toUpperCase();
}

// Example usage of formatString function
let greeting = "hello, world!";
let formattedGreeting = formatString(greeting);
console.log("Formatted greeting: " + formattedGreeting);

// Part 3: JavaScript Loops — Embrace the Power of Repetition!

// Using a 'for' loop to display numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Using forEach loop to iterate over an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Part 4: Mastering the DOM with JavaScript

// DOM Manipulation: Change text content of an element
document.getElementById("welcome-message").innerText = "Hello, welcome to my JavaScript project!";

// DOM Manipulation: Toggle dark mode class when button is clicked
document.getElementById("toggle-btn").addEventListener("click", function() {
