import fsProm from "fs/promises";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const remove = async () => {
  // Write your code here
  const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");
  try {
    await fsProm.rm(fileToRemove);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
