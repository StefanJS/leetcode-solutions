import { Readable } from "stream";

export const createReadableStream = (data: string): Readable => {
  const stream = new Readable({
    read() {
      // No-op
    },
  });
  stream.push(data);
  stream.push(null); // End of stream
  return stream;
};
