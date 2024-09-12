export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  // If k is larger than n, reduce it by modulo to avoid unnecessary full rotations
  k = k % n;

  // Helper function to reverse a part of the array
  const reverse = (start: number, end: number): void => {
    while (start < end) {
      // Swap nums[start] and nums[end]
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // Step 1: Reverse the entire array
  reverse(0, n - 1);
  // Step 2: Reverse the first k elements
  reverse(0, k - 1);
  // Step 3: Reverse the remaining n - k elements
  reverse(k, n - 1);
}
