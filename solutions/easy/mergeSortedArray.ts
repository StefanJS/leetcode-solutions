/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let p1 = m - 1; // Pointer for the last element in the meaningful part of nums1
  let p2 = n - 1; // Pointer for the last element in nums2
  let pMerge = m + n - 1; // Pointer for the last position of nums1 (total length available)

  // While there are elements to process in nums2
  while (p2 >= 0) {
    // If there are still elements in nums1 to compare
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[pMerge] = nums1[p1]; // Place nums1[p1] in the correct position
      p1--; // Move the pointer in nums1 left
    } else {
      nums1[pMerge] = nums2[p2]; // Place nums2[p2] in the correct position
      p2--; // Move the pointer in nums2 left
    }
    pMerge--; // Move the pointer in the merged array left
  }
}
