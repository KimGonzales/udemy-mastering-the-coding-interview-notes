function sayHi(){
  console.log("hello world")
}

const nemo = ["nemo"];

function findNemo(array){
  let t0 = Date.now()
  for (let i = 0; i < array.length; i ++){
    if (array[i] === "nemo"){
      console.log("FOUND NEMO!")
    }
  }
  let t1 = Date.now();
  console.log(`Call to find nemo took ${t1-t0}`)
}

findNemo(nemo)