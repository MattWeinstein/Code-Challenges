/*Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills
*/

function giveChange(amount) {
  // Givens
  let currentNumber = amount;
  let array = [0,0,0,0,0,0];
  console.log(currentNumber)
  
  //Hundreds
  let hundos = Math.floor((currentNumber/100))
  currentNumber -= (hundos*100)
  array[5]=hundos
    console.log(currentNumber)

  
  //Fiftys
  let fiftys = Math.floor((currentNumber/50))
  currentNumber -= (fiftys*50)
  array[4]=fiftys
  
  //Twenties
  let twenties = Math.floor((currentNumber/20))
  currentNumber -= (twenties*20)
  array[3]=twenties
    console.log(currentNumber)

  
  //Tens
  let tens = Math.floor((currentNumber/10))
  currentNumber -= (tens*10)
  array[2]=tens
    console.log(currentNumber)

  
  //Fives
  let fives = Math.floor((currentNumber/5))
  currentNumber -= (fives*5)
  array[1]=fives
    console.log(currentNumber)

  
  //Ones
  let ones = Math.floor((currentNumber/1))
  currentNumber -= (ones*1)
  array[0]=ones
    console.log(currentNumber)
    
  return array 
}
