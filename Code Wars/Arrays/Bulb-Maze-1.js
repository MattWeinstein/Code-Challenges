/*Let's us use a string map to represent these rooms， like this: "xo oxox".

"x" means there is a bulb in the room, and its initial status is off;

"o" means there is a bulb in the room, and its initial status is on;

" "(space) means a room without bulb, it's always dark.

Your task is to determine if you can go through the maze. Return true if you can, false otherwise.

Note
Your initial position is the most left, the exit position is the most right.

Your moving speed is 1 minute per step. You can not stop before you start your moving until you reach the exit.*/

for(let i =0;i<entireArray.length;i++){
    i%2==0?evenArray.push(maze[i]):oddArray.push(maze[i])
  }
  if(evenArray.includes('x') && oddArray.includes('x')){
     return false
     } else if(oddArray.includes('o') && evenArray.includes('o')){
     return false
     } else if(evenArray.includes('x') && evenArray.includes('o')){
     return false
     } else if(oddArray.includes('x') && oddArray.includes('o')){
     return false  
    } else{
    return true
  }
}
