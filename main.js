// node main.js --url=https://builtwith.com/ --input=input.csv

// npm init -y
// npm install minimist
// npm install puppeteer

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");
let xl = require('excel4node');

let args = minimist(process.argv);

//take input from csv

async function run() {
  // start the browser
  let browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null,
  });

  // get the tabs (there is only one tab)
  let pages = await browser.pages();
  let page = pages[0];

  // open the url
  await page.goto(args.url);

}
run();
