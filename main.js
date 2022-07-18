// node main.js --url=https://builtwith.com/ --input=input.csv

// npm init -y
// npm install minimist
// npm install puppeteer

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");
let xl = require('excel4node');

let args = minimist(process.argv);

async function run() {
    //get number of nonempty rows of first col as 
    for(let i=0;i<7;i++){
        // get classifier
        // append classifier to input.csv
    }

}
run();
