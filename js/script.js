//Do while loop

// var isRunning = false;
// while(isRunning){
//     console.log("I am running");
// }

// var i = 1;

// do{
//     console.log(i);
//     i++;
// }while(i <= 10)

// var i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i <+ 10)



//Break Continue
//Break
// for(var i = 0; i <= 10; i++){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
// }

//Continue
// for(var i = 0; i <= 10; i++){
//     if(i == 5){
//         console.log("This is Five.")
//         continue;
//     }console.log(i)
// }

// Source code
// let userInput = prompt();
// let result;
// if (userInput <= 100 && userInput > 80) {
//     result = "A+"
// } else if (userInput <= 80 && userInput > 70) {
//     result = "A"
// } else if (userInput <= 70 && userInput > 60) {
//     result = "A-"
// } else if (userInput <= 60 && userInput > 50) {
//     result = "B"
// } else if (userInput <= 50 && userInput > 40) {
//     result = "C"
// } else if (userInput <= 40 && userInput >= 33) {
//     result = "D"
// } else if (userInput < 33 && userInput >= 0 &&userInput !== "" && userInput !== null){
//     result = "Fail"
// } else if(userInput === "" || userInput === null) {
//     result = "You did not put any number";
// } else {
//     result = "Invalid Input"
// }
// console.log(result)


var userInput = prompt();
var userOutPut;

if(userInput <= 100 && userInput > 80){
    userOutPut = "A+";
}else if(userInput <= 80 && userInput > 70){
    userOutPut = "A";
}else if(userInput <= 70 && userInput > 60){
    userOutPut = "A-";
}else if(userInput <= 60 && userInput > 50){
    userOutPut = "B";
}else if(userInput <= 50 && userInput > 40){
    userOutPut = "C";
}else if(userInput <= 40 && userInput >= 33){
    userOutPut = "D";
}else if(userInput < 33 && userInput >= 0 && userInput !== "" && userInput !== null){
    userOutPut = "Fail";
}else if(userInput === "" || userInput === null){
    userOutPut = "You did not put any number please input your number."
}else{
    userOutPut = "Invalid Number"
}console.log(userOutPut);






















