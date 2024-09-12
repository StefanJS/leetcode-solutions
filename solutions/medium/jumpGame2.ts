function jump(nums: number[]): number {
  let jumps = 0;
  let farthest = 0;
  let currentEnd = 0;

  // Iterate through the array, except for the last index
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest point we can reach
    farthest = Math.max(farthest, i + nums[i]);

    // If we have reached the end of the current jump, we need to jump again
    if (i == currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}
