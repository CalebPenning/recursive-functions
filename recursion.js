/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, currLongest = 0) {
  if (i === words.length) return currLongest
  currLongest = Math.max(words[i].length, currLongest)
  return longest(words, i + 1, currLongest)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  // if our iterator is past the last index, return new string
  if (i >= str.length) return newStr
  // other wise add the character at index, and increment our index by two
  newStr += str[i]
  return everyOther(str, i + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = str.length - 1, compStr = "") {
  if (compStr.length === str.length) {
    return compStr === str
  }
  compStr += str[i]
  return isPalindrome(str, i - 1, compStr)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i
  else if (i === arr.length) return -1
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, newStr = "") {
  if (i === -1) return newStr
  newStr += str[i]
  return revString(str, i - 1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key])
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]))
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1
  let mid = Math.floor((left + right) / 2)
  if (arr[mid] === val) return mid
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1)
  return binarySearch(arr, val, mid + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
