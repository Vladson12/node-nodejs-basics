import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const read = async () => {
  // Write your code here
  const fileToRead = path.join(__dirname, "files", "fileToRead.txt");

  const readStream = fs.createReadStream(fileToRead);

  pipeline(readStream, process.stdout);
};

await read();
