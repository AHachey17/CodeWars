// Unfinished Loop - Bug Fixing #1
//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop! Given:

/*function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number){
    newArray.push(counter);
  }
  
  return newArray;
}*/
//solution: added "afterthought" end of loop
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}