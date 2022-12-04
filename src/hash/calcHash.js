import fsProm from "fs/promises";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";
import crypto from "crypto";

const { __dirname } = getFileDir(import.meta.url);

const calculateHash = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  try {
    const data = await fsProm.readFile(filePath);
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  } catch (err) {
    throw err;
  }
};

await calculateHash();
