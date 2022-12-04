import { Transform, pipeline } from "stream";

const transformStream = new Transform({
  transform(chunk, _, cb) {
    const chunkString = chunk.toString().trim();

    const chunkReversed = chunkString.split("").reverse().join("");

    cb(null, chunkReversed + "\n");
  },
});

const transform = async () => {
  // Write your code here
  pipeline(process.stdin, transformStream, process.stdout, (err) => {
    console.log(err);
  });
};

await transform();
