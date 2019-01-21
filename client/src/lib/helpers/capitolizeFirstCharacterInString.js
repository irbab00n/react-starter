/**
 * @param {string} string The string of which you want to capitolize the first character in
 * @returns {string} The capitolized string
 */
module.exports = (string) => {
  // seperate the first character of the string from the rest
  var firstChar = string.substring(0, 1);
  var rest = string.substring(1);
  // add the rest of the string back onto the capitolized letter
  var capitolizedString = firstChar.toUpperCase() + rest;
  // return the string
  return capitolizedString;
};