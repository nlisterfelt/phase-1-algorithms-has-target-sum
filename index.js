function hasTargetSum(array, target) {
  for(let i=0; i<array.length-1; i++){
    for(let j=i+1; j<array.length; j++){
      const sum = array[i]+array[j]
      if(sum===target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  runtime O(n**2)
  space O(n)
*/

/* 
  Add your pseudocode here
  -Get array length
  -for loop starting with first element and iterating through length-1
  -for loop inside other for loop to check the rest of the elements added to the other element
  -check sum to target
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
