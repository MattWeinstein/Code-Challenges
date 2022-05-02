//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
let length =arr.length
let answer =[]
for(let i=0;i<length;i++){
  if(i%2==0){
    answer.push(arr[i])
  }
}
  return answer
}
