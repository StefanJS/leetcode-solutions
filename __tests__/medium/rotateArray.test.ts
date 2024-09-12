import { rotate } from "../../solutions/medium/rotateArray"; // Adjust the import path as necessary

describe("rotate", () => {
  test("should rotate the array [1,2,3,4,5,6,7] by 3 steps", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test("should rotate the array [-1,-100,3,99] by 2 steps", () => {
    const nums = [-1, -100, 3, 99];
    rotate(nums, 2);
    expect(nums).toEqual([3, 99, -1, -100]);
  });

  test("should handle rotating the array by more than its length", () => {
    const nums = [1, 2, 3, 4, 5, 6];
    rotate(nums, 8); // k = 8 is the same as k = 2 for length 6
    expect(nums).toEqual([5, 6, 1, 2, 3, 4]);
  });

  test("should rotate the array [1] by 0 steps", () => {
    const nums = [1];
    rotate(nums, 0);
    expect(nums).toEqual([1]);
  });

  test("should handle large k for small arrays", () => {
    const nums = [1, 2, 3];
    rotate(nums, 100000); // k = 100000 is effectively k = 1 for length 3
    expect(nums).toEqual([3, 1, 2]);
  });
});
