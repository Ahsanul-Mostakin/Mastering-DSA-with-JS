function anotherFunction() {
    // This can be empty or some functionality
}

function funChallenge(input) {
    let a = 10; // O(1) - Initialize a to 10
    a = 50 + 3; // O(1) - Update a to 53

    for (let i = 0; i < input.length; i++) {
        anotherFunction(); // O(1) - Assuming O(1) for this function
        let stranger = true; // O(1) - Local variable inside the loop
        a++; // O(1) - Increment 'a' by 1 each iteration
    }
    
    return a; // O(1) - Return the final value of 'a'
}

// Example usage
const inputArray = [1, 2, 3]; // Example input array
const result = funChallenge(inputArray); // Call the function with the input
console.log(result); // O(1) - Output the result
