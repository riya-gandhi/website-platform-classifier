// node main.js --url=https://builtwith.com/ --input=input.csv

// npm init -y
// npm install minimist
// npm install puppeteer

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");
let xl = require('excel4node');

let args = minimist(process.argv);
// start the browser
let browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
});

// get the tabs (there is only one tab)
let pages = await browser.pages();
let page = pages[0];

async function run() {
  //get number of nonempty rows of first col as
  for (let i = 0; i < 7; i++) {
    // get classifier
    await getClassifier();
    // append classifier to input.csv
    await appendClassifier();
  }
}
run();

async function getClassifier() {

}
async function appendClassifier() {

}
