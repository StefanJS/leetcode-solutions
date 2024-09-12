function maxProfit(prices: number[]): number {
  let minPrice = Infinity; // Initialize the minimum price as infinity
  let maxProfit = 0; // Initialize the maximum profit as 0

  // Iterate over each price
  for (let price of prices) {
    // Update the minimum price if the current price is lower
    if (price < minPrice) {
      minPrice = price;
    } else {
      // Calculate profit by selling at current price and update maxProfit if higher
      const profit = price - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit; // Return the maximum profit
}
