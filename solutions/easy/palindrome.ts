function isPalindrome(s: string): boolean {
  // Step 1: Filter only alphanumeric characters and convert to lowercase
  let filteredStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Compare the filtered string with its reverse
  let reversedStr = filteredStr.split("").reverse().join("");

  return filteredStr === reversedStr;
}
