import fs from "fs";
import csv from "csv-parser";

// Define the interface for row data
interface QuoteData {
  userId?: string; // userId might be undefined if missing
}

// Function to read CSV data and extract userIds
const readCsv = async (filePath: string): Promise<Set<string>> => {
  const userIds = new Set<string>();

  // This code snippet reads a CSV file and processes each row to extract unique user IDs.
  // The `fs.createReadStream` method opens a readable stream for the file specified by `filePath`,
  // and the `csv` parser transforms the stream into a format that can be processed row by row.
  // The `mapHeaders` and `mapValues` functions ensure that any extra whitespace around headers and values is removed,
  // which helps avoid issues with inconsistent data formatting.

  // The `on("data")` event handler processes each row of the CSV file. It adds the `userId` to a Set if it exists,
  // ensuring that only unique user IDs are collected. If `userId` is missing from any row,
  // a warning is logged, which helps identify data integrity issues in the CSV file.
  // This approach is efficient for handling large files and ensures that data is processed in a memory-efficient manner.

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(
        csv({
          mapHeaders: ({ header }) => header.trim(),
          mapValues: ({ value }) => value.trim(),
        })
      )
      .on("data", (row: QuoteData) => {
        if (row.userId) {
          userIds.add(row.userId);
        } else {
          console.warn(`Missing userId in row: ${JSON.stringify(row)}`);
        }
      })
      .on("end", () => {
        console.log(
          `Finished reading ${filePath}. Total userIds found: ${userIds.size}`
        );
        resolve(userIds);
      })
      .on("error", (error) => {
        console.error(`Error reading CSV file (${filePath}):`, error.message);
        reject(error);
      });
  });
};

// Function to find loyal customers based on two CSV files
export const findLoyalCustomers = async (
  file1: string,
  file2: string
): Promise<Set<string>> => {
  try {
    // Read files concurrently
    const [userIdsDay1, userIdsDay2] = await Promise.all([
      readCsv(file1),
      readCsv(file2),
    ]);

    // Find loyal customers by intersection and store in a Set
    const loyalCustomers = new Set<string>();

    // Traverse and add to set if day2 has day1 userIds
    userIdsDay1.forEach((userId) => {
      if (userIdsDay2.has(userId)) {
        loyalCustomers.add(userId);
      }
    });

    return loyalCustomers;
  } catch (error) {
    console.error("Error finding loyal customers:", error);
    throw error;
  }
};

(async () => {
  try {
    const loyalCustomers = await findLoyalCustomers(
      "./solutions/naked/day1.csv",
      "./solutions/naked/day2.csv"
    );
    console.log("Loyal Customers:", loyalCustomers);
  } catch (error) {
    console.error("Error:", error);
  }
})();

// Finished reading ./solutions/naked/day1.csv. Total userIds found: 3
// Finished reading ./solutions/naked/day2.csv. Total userIds found: 4
// Loyal Customers: Set(3) { 'user001', 'user002', 'user003' }
