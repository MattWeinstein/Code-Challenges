/* Simple, given a string of words, return the length of the shortest word(s).*/
function findShort(s){
return  s.split(' ').map(element=>element.length).sort((a,b)=> a-b)[0]
}
