// Code your solutions in this file
// for(let age=30; age<40; age++){
//     console.log(`I am ${age} happy birthday to me`)
   
// }
// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts){
// for(let i=0; i<gifts.length; i++){
//     console.log(`wrapped ${gifts[i]} and added a bow`);
//     debugger;
// }
// return gifts;
// }
// wrapGifts(gifts);
let namesArray=["Charlie", "Samip", "Ali"];

function writeCards(namesArray, event){
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
    
    thankYouMessages.push(message);

 }
 return thankYouMessages


}
let messages=writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);
function countDown(number){
    for(let i=number;i>=0; i--)
        console.log(i)
    

}
countDown(5)

