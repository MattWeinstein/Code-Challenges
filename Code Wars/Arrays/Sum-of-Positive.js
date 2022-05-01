//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let answer = 0
  arr.forEach((element,index) => {if(arr[index]>0){answer+=arr[index]}})
  console.log(answer)
  return answer
}
