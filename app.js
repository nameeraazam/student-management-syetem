import inquirer from "inquirer";
const randomNumber = Math.floor(100000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["Ms.office", "HTML", "javascript", "Typescript", "python"],
    },
]);
const tutionFee = {
    "MS.Office": 2000,
    HTML: 2500,
    javascript: 5000,
    Typescript: 6000,
    python: 10000,
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n `);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "jazzcash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
]);
console.log(`\nYou select payment method${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations, you have sucessfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["View Status", "Exit"],
        },
    ]);
    if (ans.select === "View Sttus") {
        console.log("\n***************Status***************");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees paid: ${paymentAmount}`);
        console.log(`Balance ${(myBalance += paymentAmount)} `);
    }
    else {
        console.log("\nExiting Student Management system");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
