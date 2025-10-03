/* Determine the day type (weekday or weekend)
 write a program that takes (e.g., "Monday") and checks if it's a weekday 
 or a weekend day.*/

// let weekday =["Saturday","Sunday", "Monday","Tuesday","Wednesday","Thursday"];



let day = String("sunday");

if (day == "friday") {
    console.log(`${day},is a weekend day.`);
}else if (day == "saturday "|| "sunday"|| "monday"|| "tuesday" || "wednesday" || "thursday") {
    console.log(`${day},is a week day`);
    
}


/* Traffic light Simulator
write a program that takes a traffic light color ("red", "yellow","green")
and outputs what a driver should do (e.g.,"stop", "prepare to stop","Go").*/

let lightValue = "Red";

if (lightValue == "Red") {
    console.log("Stop");
    
}else if(lightValue == "Yellow"){
    console.log("Prepare to stop");
    
}else if (lightValue == "Green") {
    console.log("Go");
    
}


/* Check if a Temperature is Hot,Cold,or Moderate
Write a program that takes a temperature in celcius and classifies it as "Hot", 
(above 30c), "moderate" (15-30c), or "cold"(below 15c).*/

let temperature = 25;


if( temperature > 30){
    console.log("Hot");
    
}else if (temperature < 15) {
    console.log("Cold");
    
}else{
    console.log("Moderate");
    
}


/* Simple Login Check
write a program that checks if a username and password match predefined values (e.g.,Username:"admin",password:"1234").
print whether login is successful or not. */


let loginInfo = {
    username : "admin",
    password : 1234
};

// let userUserName = prompt("Enter Your Username:");
// let userUserPassword =prompt("Enter Your Password:");

// if (loginInfo.username === userUserName && loginInfo.password === userUserPassword) {
//     console.log("Login is Successful.");

// }else {
//     console.log("Login is not successful.");

// }

/*
print numbers from 1 to 10
print the multiplication table of 5
Sum of first 10 natural numbers
print even numbers between 1 and 20
Print each element of an array
*/

    let num10;
    for (let num10 = 1; num10 <= 10; num10++) {
        console.log(num10);
    }
    //successful


    const mulNum = 5;
    let i;
    for (let i = 1; i <= 100; i++) {
        let equation = mulNum*i;
        console.log("Multication Table of 5 =",equation);       
    }

    let sum = 0;
    for (let i = 0; i <= 20; i++) {
        sum = sum + i;  
    }
        console.log("sum =",sum);
      //successful 

    let naturalNumSum = 0;
    for (let i = 1; i <= 10; i++) {
      naturalNumSum = naturalNumSum + i;   
    }
        console.log("Sum Of First Ten Natural Number =",naturalNumSum);

     //successful   

    let evenNum ;
    for (let evenNum = 1; evenNum <= 20; evenNum++) {
       if (evenNum % 2 == 0) {
            console.log("Even Numbers:",evenNum);
            
       } 
    }

    let fruits =["Apple","Mango","Banana","Orange","lichi"];
    let index ;
    for (let index = 0; index < fruits.length; index++) {
        console.log(fruits[index]);   
    }

    let sum1 = 0;
    for(let i=1; i<=100; i++){
      sum = sum + i;
    }
     console.log("sum =", sum);
    //------/------//
    for(let i=1; i<=5; i++){
        console.log("i =", i);
    }


 const fun100 = (a,b,x,y,z)=>{
    var1 = a+b;
    console.log(var1);
    var10 = var1 - x;
    console.log(var10);
    var100 = var10*y;
    console.log(var100);
    var1000 = var100/z;
    console.log(var1000);
    
    
 }
fun100(100,100,50,10,10);

























































































































