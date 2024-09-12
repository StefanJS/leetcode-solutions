/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  // Pointers for nums1, nums2 and merged array
  let p1 = m - 1; // Points to the last element in the meaningful part of nums1
  let p2 = n - 1; // Points to the last element in nums2
  let pMerge = m + n - 1; // Points to the last position of nums1 (m + n space available)

  // Iterate backwards, comparing elements and placing them in the correct position
  while (p2 >= 0) {
    // We only care about elements in nums2 as nums1's elements might already be in place
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[pMerge] = nums1[p1]; // If nums1's element is greater, place it at the end
      p1--; // Move nums1 pointer left
    } else {
      nums1[pMerge] = nums2[p2]; // Otherwise, place nums2's element
      p2--; // Move nums2 pointer left
    }
    pMerge--; // Move the merge pointer left
  }
}
