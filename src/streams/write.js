import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const write = async () => {
  // Write your code here
  const fileToWrite = path.join(__dirname, "files", "fileToWrite.txt");

  const writeStream = fs.createWriteStream(fileToWrite);

  pipeline(process.stdin, writeStream);
};

await write();
