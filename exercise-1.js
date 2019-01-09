// Exercise: Big O Calculation
// Section 3: Lecture 27

// What is the Big O of the below function (Hint, you may want
// to go line by line )

function funChallenge(input){
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++){
    anotherFunction(); // 0(n)
    let stranger = true; //O(n)
    a++; // O(n)
  }
  return a; //O(1)
}

// O(3*n)