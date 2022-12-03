import fsProm from "fs/promises";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const list = async () => {
  // Write your code here
  const srcFolder = path.join(__dirname, "files");

  try {
    const files = await fsProm.readdir(srcFolder);
    files.filter((file) => console.log(file));
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
