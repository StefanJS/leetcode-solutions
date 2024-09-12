function reverseBits(n: number): number {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // Left shift the result to make space for the next bit
    result <<= 1;
    // Extract the least significant bit of n and add it to result
    result |= n & 1;
    // Right shift n to process the next bit
    n >>>= 1;
  }
  return result >>> 0; // Ensure the result is treated as unsigned
}
