function sayHi(){
  console.log("hello world")
}

const nemo = ["nemo"];
const everyone = ["kim", "maggie", "hi", "ha", "ho", "nemo"];
const large = new Array(100).fill('nemo')

function findNemo(array){

  for (let i = 0; i < array.length; i ++){
    if (array[i] === "nemo"){
      console.log("FOUND NEMO!")
    }
  }
}

findNemo(large); //O(n) The BIG O of n is Linear Time
// n simply means the Big O depends on the number of inputs aka 'n'
// if input was our variable nemo Big O would be O(1) because the nemo array has just 1 element

/* 
Big O doesn't measure things in seconds, instead we're foucsing on how quickly
our run time grows. We do this by  measuring the size of the input and compare it to the 
number of ooperations that increase. Thats what scalability means. As things grow larger and larger
does it scale?

*/


// ES5
function compressAllBoxes(boxes){
  boxes.forEach(function(item){
    console.log(item)
  });
}

//ES6 
const compressAllBoxes = (boxes) => {
  boxes.forEach(box => console.log(box));
}

function compressFirstBox(boxes){
  console.log(boxes[0])
}
// The Big 0 of this function would be O(1) or - Constant Time
// We are always just grabbing the FIRST Item in an array, no matter if that array has a length of 1 or 100
// The number of operations is always 1 - Constant Time
// The number of operations stays flat


