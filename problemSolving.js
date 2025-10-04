//Problem 2 : Reverse String -- write a function that reverses a string using a while loop and if-else to handle empty or invalid inputs.

        function reversedString(input) {
            reverseString = "";

            if (typeof input !== "string" || input.length === 0) {
                return `Invald input.`
            }else{
                let i = input.length - 1;
                 while (i>=0) {
                    reverseString += input[i];
                    i--;
                 }
            }  
            return reverseString;
        }
        console.log(reversedString("niloy"));
        
//problem 3 : Sum of Multiples -- Write a function that calculates the sum of all numbers from 1 to n that are 
// multiples of 3 or 5,using a for loop and if-else.

        function sumOfMultiples3and5(n) {
            let sum = 0;
            for (let i = 1; i <= n; i++){
                if (i % 3 === 0 || i % 5 === 0) {
                    sum += i;
                }
               
            }
            return sum;
        }
        console.log(sumOfMultiples3and5(100));


//Problem 4 : Count Passing students -- Write a function that takes an array of students scores and uses a for loop and if-else 
// to count how many students passed(score>=60).
   
    function countPassingStudents() {
        let score = [78,98,78,88,89,45,77,88,56,81,74,75,56,35,96,58,52,99,99,100];
       

        let passingCount = 0;
        const passingScore = 60;

        for (let i = 0; i < score.length; i++) {
            let currentScore = score[i];

            if(currentScore >= passingScore ){
               passingCount++;
                
            }       
        }
        return passingCount;
    }
    console.log(countPassingStudents());

//Problem 5 : Number Guessing Game -- Write a function that simulates a number guessing game .Generate a random number between 1 and 10,
//and use a while loop and if-else to check if a user's guess (provided as an argument) is correct ,too high or too low.

        function numberGuessingGame (userGuess){
          const randomNumber = Math.floor(Math.random()*10) + 1;
           if (randomNumber === userGuess) {
                console.log(`${randomNumber} is correct Number.`);
                               
           }else if (randomNumber > userGuess){
                console.log(" Your Number is too high.");
                
           }else{
                console.log("Your number is too low.");
                
           }
       
        }

        numberGuessingGame(2);


