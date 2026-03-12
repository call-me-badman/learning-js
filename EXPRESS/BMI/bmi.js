const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your mass in kg: ", function (mass) {
  rl.question("Enter your height in meters: ", function (height) {
    let bmi = mass / (height * height);
    console.log("Your BMI is: " + bmi.toFixed(2));

    if (bmi <= 18.5) {
        console.log("You are underweight");
    } else if (bmi <= 24.9) {
        console.log("You are at the right BMI!");
    } else if (bmi <= 29.9) {
        console.log("You are overweight!");
    } else {
        console.log("You are obese.");
    }

    rl.close();
  });
});
