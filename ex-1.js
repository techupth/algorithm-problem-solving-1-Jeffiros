function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  for (let num in numbers) {
    for (let no in numbers) {
      if (no != num) {
        if (numbers[num] + numbers[no] === target) {
          result.push(num);
        }
      }
    }
  }
  return result;
}

numbers = [2, 7, 11, 15];
console.log(twoSum(numbers, 9));
