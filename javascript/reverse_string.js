function reverseString(str) {
  // type your code here
  let newStr = str.split('')
  let splitStr = newStr.reverse()
  return splitStr.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;
// console.log(reverseString("hello"))
// Please add your pseudocode to this file
// And a written explanation of your solution
