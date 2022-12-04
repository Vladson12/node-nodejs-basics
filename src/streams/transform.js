import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transformStream = new Transform({
  transform(chunk, _, cb) {
    const chunkString = chunk.toString().trim();

    const chunkReversed = chunkString.split("").reverse().join("");

    cb(null, chunkReversed + "\n");
  },
});

const transform = async () => {
  // Write your code here
  try {
    await pipeline(process.stdin, transformStream, process.stdout);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

await transform();
