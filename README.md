# website-platform-classifier
Automate using builtWith.com to classify if the given website is built on Shopify, Magento, BigCommerce, WooCommerce or is not functional using puppeteer.js node library.

1. Take a csv as input which contains a list of 7 websites that need to be classified.
2. Use puppeteer.js node library to automate searching the platform on builtWith.com.
3. Use excel4node.js node library to manipulate the input csv.

Scope of improvement:
1. Instead of assuming 7 websites as mentioned in the input file, we can iterate till we get empty object by initially removing all empty cells in between the input column.
