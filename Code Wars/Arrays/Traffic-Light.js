/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.*/

function updateLight(current) {
let lights =['green','yellow','red']
return lights[(lights.indexOf(current)+1)%3]
}
