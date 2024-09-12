export function canJump(nums: number[]): boolean {
  let farthest = 0; // To track the farthest index that can be reached

  for (let i = 0; i < nums.length; i++) {
    // If current index exceeds the farthest index we can reach, return false
    if (i > farthest) {
      return false;
    }
    // Update the farthest index we can reach from this point
    farthest = Math.max(farthest, i + nums[i]);

    // If the farthest index is beyond or at the last index, we can reach the end
    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  return false; // If we exit the loop, it means we couldn't reach the end
}
