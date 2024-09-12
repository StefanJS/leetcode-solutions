import fs from "fs";
import csv from "csv-parser";
import { findLoyalCustomers } from "../../solutions/naked/loyalCustomers"; // Adjust import as needed
import { Readable } from "stream";

// Create a function to generate readable streams
const createReadableStream = (data: string): Readable => {
  const stream = new Readable({
    read() {
      // No-op
    },
  });
  stream.push(data);
  stream.push(null); // End of stream
  return stream;
};

// Mock the fs module and csv-parser module
jest.mock("csv-parser", () => jest.fn());
jest.spyOn(fs, "createReadStream");

describe("findLoyalCustomers", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return a set of loyal customers", async () => {
    // Mock fs.createReadStream to return controlled CSV data
    (fs.createReadStream as jest.Mock).mockImplementation((filePath) => {
      if (filePath === "./solutions/naked/day1.csv") {
        return createReadableStream("userId\nuser1\nuser2\n") as any;
      }
      if (filePath === "./solutions/naked/day2.csv") {
        return createReadableStream("userId\nuser2\nuser3\n") as any;
      }
      throw new Error("File not found");
    });

    // Mock csv-parser to just pass through data
    (csv as jest.Mock).mockImplementation(() => ({
      pipe: (stream: any) => stream,
    }));

    const result = await findLoyalCustomers(
      "./solutions/naked/day1.csv",
      "./solutions/naked/day2.csv"
    );

    expect(result).toEqual(new Set(["user2"]));
  });

  it("should handle errors gracefully", async () => {
    // Mock fs.createReadStream to simulate an error
    (fs.createReadStream as jest.Mock).mockImplementation(() => {
      throw new Error("File read error");
    });

    await expect(
      findLoyalCustomers(
        "./solutions/naked/day1.csv",
        "./solutions/naked/day2.csv"
      )
    ).rejects.toThrow("File read error");
  });
});
