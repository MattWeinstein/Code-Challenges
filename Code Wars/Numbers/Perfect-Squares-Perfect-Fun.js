/*Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:
1212 returns:
12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.
123123123 returns:
123
123
123
Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.*/

function squareIt(int) {
  //Getting the sq root of the parameter using the global math object
  let sqRoot = Math.sqrt(int.toString().length)
  //Setting global variables we will use and manipulate later
  let answer = ''
  let nums
  //Condiitonal to check if we have a perfect square 
  if(sqRoot%1===0){
    //If modulus/1 leaves no remainder, it is
    for(let i = 1;i<=sqRoot;i++){
      //Loop to create the block to return to the console
      if(i===1){
        //Will only need the new line charachter 1 less than number of rows
        nums=int.toString().slice(0,sqRoot)
        //Slice the original parameter from 0 to the square root (inclusive) on first iteration
        answer=nums
      }else{
        //Slice the next part of the string at i*sq root, and i-1
        nums = int.toString().slice((i-1)*sqRoot,(i*sqRoot))
        answer+=`\n${nums}`
      }
    }
  return answer
  } else{
    //If modulus/1 leaves a remainder, it is not a perfect square
    return 'Not a perfect square!'
  }
}
