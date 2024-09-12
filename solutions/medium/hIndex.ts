function hIndex(citations: number[]): number {
  // Sort the citations array in descending order
  citations.sort((a, b) => b - a);

  let h = 0;

  // Loop through the sorted citations array
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
}
