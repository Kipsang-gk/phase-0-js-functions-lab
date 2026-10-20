//a function to calculate tax amount applied on an item
function calculateTax(amount) {
  let taxRate = 10;
  let taxAmount = amount * (taxRate / 100);
  return taxAmount;
}
console.log(calculateTax(100000));


//a function to convert a text string argument into uppercase letters
function convertToUpperCase(text){
  return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));

//a function that compares two numbers and returns the larger number of the two
function findMaximum(num1, num2) {
  if (num1 < num2) {
    return num2;
  }else if (num1 == num2){
    return "condition undefined";
  }else {
    return num1;
  }
} 
console.log(findMaximum(1000, 100));

//a function that inspects a word string and evaluates whether it is palindrome or not
function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
     return true;
  }else {
    return false;
  }  
}
console.log(isPalindrome("gilbert"));

//a function that calculates the final price of an item after discount is applied
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let finalPrice = originalPrice - (originalPrice * discountPercentage /100);
  return finalPrice;
}
console.log(calculateDiscountedPrice(100, 20));

