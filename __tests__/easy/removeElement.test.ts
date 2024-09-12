// solutions/easy/removeElement.test.ts

import { removeElement } from "../../solutions/easy/removeElement";

test("removeElement([3,2,2,3], 3) should return 2", () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  const k = removeElement(nums, val);
  expect(k).toBe(2);
  expect(nums.slice(0, k)).toEqual([2, 2]);
});

test("removeElement([0,1,2,2,3,0,4,2], 2) should return 5", () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  const k = removeElement(nums, val);
  expect(k).toBe(5);
  expect(nums.slice(0, k).sort((a, b) => a - b)).toEqual([0, 0, 1, 3, 4]);
});

test("removeElement([], 1) should return 0", () => {
  const nums: number[] = [];
  const val = 1;
  const k = removeElement(nums, val);
  expect(k).toBe(0);
  expect(nums).toEqual([]);
});

test("removeElement([1,2,3,4], 5) should return 4", () => {
  const nums = [1, 2, 3, 4];
  const val = 5;
  const k = removeElement(nums, val);
  expect(k).toBe(4);
  expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
});
