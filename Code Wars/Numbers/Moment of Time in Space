/*Task
You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

The moment of time is determined as follows:

If time is greater than space, then the moment is from the future. If time is less than space, then the moment is from the past. Otherwise, it is the present moment.

You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.
*/

function momentOfTimeInSpace(moment) {
// Create an array of just the numbers
 let array = [Number(moment[0]),Number(moment[1]),Number(moment[3]),Number(moment[4])]
 let time = array.reduce((cur,pre) => cur+pre,0)
  //A. Sum the numbers
  //B. count how many are nonzero.
 let space = 8-array.filter(element => element!==0).length
  //8-nonzero = sumof numbers?
 return [time<space,time==space,time>space] 
}
