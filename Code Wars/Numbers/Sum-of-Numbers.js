/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

function getSum( a,b )
{
  let low
  let high
  let sum =0
 if(a<b){
   low=a
   high=b
 }else if(a>b){
  low=b
  high=a
 } else if(a==b){
   return b
 }
  for(let i=low;i<=high;i++){
    sum+=i
  }
return sum
}
