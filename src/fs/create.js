import fsProm from "fs/promises";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const create = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const data = "I am fresh and young";

  try {
    await fsProm.writeFile(filePath, data, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
