import { removeDuplicates } from "../../solutions/medium/removeDuplicatesSortedArray2"; // Adjust the import path as necessary

describe("removeDuplicates", () => {
  test("should handle array with duplicates exceeding twice", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  test("should handle array with multiple duplicates exceeding twice", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  test("should handle array with all elements being unique", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle array with all elements being the same", () => {
    const nums = [1, 1, 1, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 1]);
  });

  test("should handle array with exactly two duplicates", () => {
    const nums = [1, 1, 2, 2, 3, 3, 4, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(8);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
  });

  //   test("should handle empty array", () => {
  //     const nums: number[] = [];
  //     const k = removeDuplicates(nums);
  //     expect(k).toBe(0);
  //     expect(nums).toEqual([]);
  //   });
});
