
// for(let i = 0; i < 20; i ++){
//     console.log(i+1);
// }

// for(let i = 0; i < 201; i ++){
//     if (i%2 === 0){
//     console.log(i);
//     }
// }

for(let i = 0; i < 20; i ++){
    const say = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
    console.log("Love me, pet me! HSSSSSS!");
    let randomSay = say[Math.floor(Math.random() * say.length)];
    if (i%2 === 0){
        console.log(randomSay);
    }
}
    

