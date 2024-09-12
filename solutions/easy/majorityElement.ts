export function majorityElement(nums: number[]): number {
  let candidate = nums[0]; // Initialize the first element as the candidate for majority element
  let count = 0; // Count keeps track of how many times the candidate appears

  for (let num of nums) {
    if (count === 0) {
      // If count reaches zero, we pick the current number as the new candidate
      candidate = num;
    }
    // If the current number matches the candidate, increment the count
    // Otherwise, decrement the count
    count += num === candidate ? 1 : -1;
  }

  // The candidate left at the end is the majority element
  return candidate;
}
