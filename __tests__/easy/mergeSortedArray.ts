import { merge } from "../../solutions/easy/mergeSortedArray";

test("merge([1,2,3,0,0,0], 3, [2,5,6], 3) should return [1,2,2,3,5,6]", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const nums2 = [2, 5, 6];
  merge(nums1, 3, nums2, 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("merge([1], 1, [], 0) should return [1]", () => {
  const nums1 = [1];
  const nums2: number[] = [];
  merge(nums1, 1, nums2, 0);
  expect(nums1).toEqual([1]);
});

test("merge([0], 0, [1], 1) should return [1]", () => {
  const nums1 = [0];
  const nums2 = [1];
  merge(nums1, 0, nums2, 1);
  expect(nums1).toEqual([1]);
});

test("merge([4,5,6,0,0,0], 3, [1,2,3], 3) should return [1,2,3,4,5,6]", () => {
  const nums1 = [4, 5, 6, 0, 0, 0];
  const nums2 = [1, 2, 3];
  merge(nums1, 3, nums2, 3);
  expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});
