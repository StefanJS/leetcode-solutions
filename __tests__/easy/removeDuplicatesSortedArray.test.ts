import { removeDuplicates } from "../../solutions/easy/removeDuplicatesSortedArray"; // Adjust the import path as necessary

describe("removeDuplicates", () => {
  test("should handle array with duplicates", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  test("should handle array with multiple duplicates", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  test("should handle array with all identical elements", () => {
    const nums = [1, 1, 1, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  //   test("should handle empty array", () => {
  //     const nums: number[] = [];
  //     const k = removeDuplicates(nums);
  //     expect(k).toBe(0);
  //     expect(nums).toEqual([]);
  //   });

  test("should handle array with no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });
});
