import { fork } from "child_process";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const spawnChildProcess = async (args) => {
  // Write your code here
  const scriptFile = path.join(__dirname, "files", "script.js");

  const child = fork(scriptFile, args);
};

const args = process.argv.slice(2);
spawnChildProcess(args);
