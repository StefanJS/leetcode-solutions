// solutions/easy/removeElement.ts

export function removeElement(nums: number[], val: number): number {
  let k = 0; // Pointer to place elements that are not equal to `val`

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Place the non-val element at position k
      k++; // Move the pointer
    }
  }

  return k; // Return the number of elements not equal to val
}
