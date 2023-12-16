//1.sumArray

const array1 = [1, 2, 3, 4, 5];

function sumArray(arr) {
    sum = 0
    for (let i = 0; i <
        arr.length; i += 1)
        sum += arr[i]
    return sum
}
console.log("Output:", sumArray(array1))

//2.findMaxNumber

const array2 = [10, 5, 8, 20, 3]

function findMaxNumber(arr) {
    const maxnumb = Math.max(...arr)
    return maxnumb
}
console.log("Output:", findMaxNumber(array2))

//3.filterOddNumbers

const array3 = [1, 2, 3, 4, 5]

function filterOddNumbers(arr) {
    const odd = arr.filter(num => num % 2 !== 0);
    return odd
}
console.log("Output:", filterOddNumbers(array3))

//4.Palindrome

function isPalindrome(word) {
    let char = word.split('').reverse().join('');
    return word === char;
}
const w1 = "radar"
const w2 = "hello"
console.log(isPalindrome(w1))
console.log(isPalindrome(w2))

//5.findMissingNumber

const array5 = [1, 2, 3, 5, 6]

function findMissingNumber(arr) {
    for (let n = 1; n <= arr.length + 1; n++)
        if (arr.indexOf(n) === -1)
            return n;
}
console.log(findMissingNumber(array5))

//6.findDuplicates

const array6 = [1, 2, 3, 2, 4, 5, 4]

function findDuplicates(arr) {
    const duplicates = arr.filter((item, index) => index !== arr.indexOf(item));
    return duplicates;
}
console.log(findDuplicates(array6));