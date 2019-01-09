function sayHi(){
  console.log("hello world")
}

const nemo = ["nemo"];
function findNemo(array){
  for (let i = 0; i < array.length; i ++){
    if (array[i] === "nemo"){
      console.log("FOUND NEMO!")
    }
  }
}

findNemo([1,2,"nemo","hi"])