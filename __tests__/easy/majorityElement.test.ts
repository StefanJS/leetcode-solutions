import { majorityElement } from "../../solutions/easy/majorityElement"; // Adjust the import path as necessary

describe("majorityElement", () => {
  test("should return the correct majority element for [3,2,3]", () => {
    const nums = [3, 2, 3];
    expect(majorityElement(nums)).toBe(3); // The majority element is 3
  });

  test("should return the correct majority element for [2,2,1,1,1,2,2]", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(nums)).toBe(2); // The majority element is 2
  });

  test("should return the correct majority element for an array with all same elements", () => {
    const nums = [1, 1, 1, 1, 1];
    expect(majorityElement(nums)).toBe(1); // All elements are the same, so the majority is 1
  });

  test("should return the correct majority element for [6,5,5]", () => {
    const nums = [6, 5, 5];
    expect(majorityElement(nums)).toBe(5); // The majority element is 5
  });

  test("should handle large arrays efficiently", () => {
    const nums = Array(10000).fill(7); // Fill an array with 7's
    nums[5000] = 8; // Add one element that's different to break the uniformity
    expect(majorityElement(nums)).toBe(7); // The majority element is still 7
  });
});
