export function removeDuplicates(nums: number[]): number {
  let k = 0; // Pointer for the position of the next unique element

  // Start iterating from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the last unique element
    if (nums[i] !== nums[k]) {
      k++; // Move the pointer for unique elements
      nums[k] = nums[i]; // Update the position with the new unique element
    }
  }

  return k + 1; // k is the index of the last unique element, so return k + 1
}
