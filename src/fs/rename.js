import fsProm from "fs/promises";
import fs from "fs";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const rename = async () => {
  // Write your code here
  const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
  const newPath = path.join(__dirname, "files", "properFilename.md");
  try {
    if (fs.existsSync(newPath)) throw new Error();
    await fsProm.rename(oldPath, newPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
