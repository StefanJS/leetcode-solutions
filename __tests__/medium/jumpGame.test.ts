import { canJump } from "../../solutions/medium/jumpGame"; // Adjust the import path as necessary

describe("canJump", () => {
  test("should return true for nums = [2,3,1,1,4]", () => {
    const nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toBe(true);
  });

  test("should return false for nums = [3,2,1,0,4]", () => {
    const nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toBe(false);
  });

  test("should return true for single element array", () => {
    const nums = [0];
    expect(canJump(nums)).toBe(true);
  });

  test("should handle large inputs efficiently", () => {
    const largeNums = Array(1e4).fill(1); // All 1s should return true
    expect(canJump(largeNums)).toBe(true);
  });
});
