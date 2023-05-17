/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined 

 Parameter: Input - array of sheep that are either t or f
   Return: Output - number of true(s) in the array
   Example: 17
   Psuedocode: 

   function countsheep(array)
  make new empty array
  array methods: map, length, push */





function countSheep(array){
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if(array[i] === true){
      newArray.push(array[i])
    }
  }
  return newArray.length
}

function countSheeps(arrayOfSheep) {
  const newArray = []
  arrayOfSheep.forEach(sheep =>  {
    if (sheep){
      newArray.push(sheep)
    }
   
   
  })
   return newArray.length
   
 }