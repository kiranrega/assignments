/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let strR1 =  removeSpacesAndSpecialChars(str1.toLowerCase()).trim()
  let strR2 =  removeSpacesAndSpecialChars(str2.toLowerCase()).trim()
   if (strR1.length !== strR2.length) { return false };
   return strR1.split("").sort().join("") === strR2.split("").sort().join("") 
 }
 module.exports = isAnagram
 
 function removeSpacesAndSpecialChars(str) {
   // Remove spaces and special characters using regular expressions
   return str.replace(/[^a-zA-Z0-9]/g, '');
 }
 
 
