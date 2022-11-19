/*for(let age = 30; age < 40; age++){
    console.log(`I am ${age} years old. Happy birthday to me!`);
    //debugger;
}*/

const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
 for(let i = 0; i < gifts.length; i++){
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //debugger;
 };
 return gifts;
};
wrapGifts(gifts);

function writeCards(names, eventName){
 let messages = [];
 for(let j = 0; j < names.length; j++){
 messages.push(`Thank you, ${names[j]}, for the wonderful ${eventName} gift!`);
 debugger;
 };
 return messages;
};
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(){
    let i = 10;
    while(i >= 0){
     console.log(i);
     i--;
    };
};
countDown(10);