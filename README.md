# CodeWarsWeek1
## Every week I will be posting a weekly Repo that I update daily with complete CodeWar Katas
### Week1
Day 1: 8KYU, PRINT FALSE - created a function that returned false without using the word 'false' at all (Functions, Conditional operator)
```
function ifChuckSaysSo(){
  return 0 === 1;
}
```
Day 2: 8KYU, COUNT SHEEP - created a function that only counted the sheep in the given array that were considered true. (Functions, Arrays, Conditionals) 
```
function countSheeps(arrayOfSheep) {
  const newArray = []
  arrayOfSheep.forEach(sheep =>  {
    if (sheep){
      newArray.push(sheep)
    }
    
    
  })
   return newArray.length 
 }
```
Day 3: 8KYU, SQUARE(n)SUM - created a function that took an array and summed each element in the array the squared it.
```
function squareSum(numbers){
  let sum = 0
  numbers.forEach(number => sum += number ** 2)
    return sum
  }
```
Day 4: 8KYU, COUNT MONKEYS - Given that there is n monkeys at the zoo, I created a function that counts n monkeys at the zoo an stores in array.
```
function monkeyCount(n) {
  const monkeyCage = []
  for(let i = 1; i <= n; i++){
    monkeyCage.push(i)
  }
   return monkeyCage
 }
```
Day5: 8KYU, SIMPLE MULTIPLICATION - created a function that multipies any give number by 8 if it is even and by 9 if it is odd.
```
function simpleMultiplication(number) {
  if (number % 2 === 0){
    return number * 8
  }else{
    return number * 9
  }
}
```

# CodeWarsWeek2
## Every week I will be posting a weekly Repo that I update daily with complete CodeWar Katas
### Week2
Day 6: 8KYU, HELLO WORLD - simply created function that returns string 'Hello World'
```
function greet() {
   return"hello world!"
 } 
```
Day 7: 8KYU, SQUARING ARGUMENT - created a function that takes the a number as a parameter and returns the number squared
```
function square(num){
 return num ** 2
}
```
Day 8: 8KYU, INCORRECT DIVISION(Debugging) - The issue with this code was that they had 2 division operators instead of one like below.
```
const solve = (x, y) => x / y}
```
Day 9: 8KYU, OPPOSITES ATTRACT - Given a function with 2 numbers as parameters, I created a expresson that will take the value of each number and return true if one is even and one is odd, and false if they are both even or if they are both odd.
```
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 !== 0
 
}
```
Day10: 8KYU, CAT & DOG YEARS - Need to work on this codewar, struggled with creating functions that have rounds of different instructions.

# CodeWarsWeek3
## Every week I will be posting a weekly Repo that I update daily with complete CodeWar Katas
### Week3
Day 11: 8KYU, UNFINISHED LOOP (debugging) - added afterthough/end of for Loop, it was missing
```
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}
```
Day 12: 8KYU, ADD LENGTH - created a function that takes an string and returns the array with a count of each word added with it's element in the array.
Thus, "apple ban" --> ["apple 5", "ban 3"]
```
function addLength(str) {
const arrOfwords = str.split(" ")
for (let i = 0; i < arrOfwords.length; i++){
  const wordLength = arrOfwords[i].length
  arrOfwords[i] = `${arrOfwords[i]} ${wordLength}`
  }
  return arrOfwords
}
```
Day 13: 8KYU, GET THE MEAN OF ARRAY - created a function that takes an array of numbers and returns the average.
```
function getAverage(marks){
  let total = 0
  for (let i = 0; i < marks.length; i++){
    total += marks[i] //remember the += 
  }
  return total / marks.length

}
```
Day 14: 8KYU, FILTER OUT THE GEESE - created a function that takes an array of birds but removes any geese ("African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher")
```
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  return birds.filter(bird => !geese.includes(bird)) 
  
}
gooseFilter()
```
Day 15: 8KYU, My head is at the wrong end! - created a function that reverses an array. After reading the direction I thought this would be a little more difficult but was pretty easy.
```
function fixTheMeerkat(arr) {
 return arr.reverse()
}

fixTheMeerkat(["tail", "body", "head"])
```


