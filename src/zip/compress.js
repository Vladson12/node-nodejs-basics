import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { getFileDir } from "../util/dirAndFileName.js";
import zlib from "zlib";

const { __dirname } = getFileDir(import.meta.url);

const compress = async () => {
  // Write your code here
  const fileToCompress = path.join(__dirname, "files", "fileToCompress.txt");
  const fileToWrite = path.join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(fileToCompress);
  const writeStream = fs.createWriteStream(fileToWrite);

  try {
    pipeline(readStream, zlib.createGzip(), writeStream);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

await compress();
