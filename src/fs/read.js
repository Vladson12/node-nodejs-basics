import fsProm from "fs/promises";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const read = async () => {
  // Write your code here
  const fileToRead = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const data = (await fsProm.readFile(fileToRead)).toString();
    console.log(data);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
