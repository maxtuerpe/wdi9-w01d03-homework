
// for(let i = 0; i < 20; i ++){
//     console.log(i+1);
// }

// for(let i = 0; i < 201; i ++){
//     if (i%2 === 0){
//     console.log(i);
//     }
// }

// for(let i = 0; i < 20; i ++){
//     const say = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
//     let randomSay = say[Math.floor(Math.random() * say.length)];
//     console.log("Love me, pet me! HSSSSSS!");
//     if (i%2 === 0){
//         console.log(randomSay);
//     }
// }

// for (let i = 1; i < 101; i++){
//     if(i%3=== 0){
//         console.log("fizz");
//     }
//     if(i%5=== 0){
//         console.log("buzz");
//     }
//     if(i%3=== 0 && i%5=== 0){
//         console.log("fizzbuzz");
//     }
//     else
//     console.log(i);
// }

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad.splice(0 , 1 , 'Gameboy');
  
daniel.splice(1, 1, (daniel[1]+1));

ryan.splice(2, 1, 'Gotham City');

reuben.pop();
reuben.push("Chicago");

jim.splice(2, 1, 'Scranton', 'Berlin', 'Hong Kong');
jim.splice(2, 1);

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let i = 0; i < ninjaTurtles.length; i++){
    console.log(ninjaTurtles[i].toUpperCase());
}


for (let i = 0; i < ninjaTurtles.length; i++){
    const chars = ninjaTurtles[i].toLowerCase().split('');
    for(let x = 0; x < chars.length; x+=2){
        chars[x] = chars[x].toUpperCase();
        }
    console.log(chars.join(''));
}
