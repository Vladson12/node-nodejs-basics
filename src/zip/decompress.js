import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { getFileDir } from "../util/dirAndFileName.js";
import zlib from "zlib";

const { __dirname } = getFileDir(import.meta.url);

const decompress = async () => {
  // Write your code here
  const fileToDecompress = path.join(__dirname, "files", "archive.gz");
  const fileToWrite = path.join(__dirname, "files", "fileToCompress.txt");

  const readStream = fs.createReadStream(fileToDecompress);
  const writeStream = fs.createWriteStream(fileToWrite);

  try {
    pipeline(readStream, zlib.createUnzip(), writeStream);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

await decompress();
