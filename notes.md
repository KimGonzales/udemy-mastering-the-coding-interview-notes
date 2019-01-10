### The BIG O Asymptotic Analysis & Scalability

## What is good code?
 - Readable
 - Scalable

 How can we make sure there is a way for us to measure efficient code? Big O notation is the language we use for talking about how long an algorithm takes to run. 

 We can compare 2 functions using Big O and ask which function takes longer to run.

 See Big-O complexity chart.

 ## Algorithmic efficiency
How an increase in our inputs(Elements) affects the increase of Operations.


When we talk about BIG O we simply mean when we grow larger, how much does the algorithm slow down. The less it slows down, the better it is (aka the more efficient it is).




## Simplifying the Big O

### Big 0 Rule Book
Rule 1. Worst Case
Rule 2. Remove Constants
Rule 3. Different terms for inputs
Rule 4. Drop Non Dominants

### Rule 1: Worst Case
Always think about the worse case scenario. Ie. The findingNemo function loops through the ENTIRE array. 

How can we make FindNemo more efficient? Put in a break!

The worst case scenario for findNemo would be if 'nemo' was the last item in the array. the BEST case would be if it was the first. 

### Rule 2: Remove Constants

```
function printFirstItemThenFirstHalfThenSayHi100Times (items){
  console.log(items[0]);
  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]){
      index++;
    }

    for (var = i; i < 100; i++){
      console.log("hi")
    }
  }
}
```


