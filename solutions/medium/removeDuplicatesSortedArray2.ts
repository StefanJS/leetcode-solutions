export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let k = 1; // Start with the second element (index 1)
  let count = 1; // Count occurrences of the current number

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1; // Reset count for a new number
    }

    // Place the element in the array if it's the first or second occurrence
    if (count <= 2) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k; // k is the length of the array with duplicates removed
}
