import fsProm from "fs/promises";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const copy = async () => {
  // Write your code here
  const src = path.join(__dirname, "files");
  const dest = path.join(__dirname, "files_copy");

  try {
    await fsProm.cp(src, dest, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copy();
