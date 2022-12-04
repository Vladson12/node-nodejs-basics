import os from "os";
import { Worker } from "worker_threads";
import path from "path";
import { getFileDir } from "../util/dirAndFileName.js";

const { __dirname } = getFileDir(import.meta.url);

const performCalculations = async () => {
  // Write your code here
  const cpusNumber = os.cpus().length;
  const initialFibonacci = 10;

  const workerFile = path.join(__dirname, "worker.js");

  const workerPromises = [];
  for (let index = 0; index < cpusNumber; index++) {
    const worker = new Worker(workerFile, {
      workerData: initialFibonacci + index,
    });

    workerPromises.push(
      new Promise((resolve, reject) => {
        worker.on("message", (msg) => {
          resolve(msg);
        });
        worker.on("error", (err) => reject());
      })
    );
  }

  const workersResult = await Promise.allSettled(workerPromises);

  const result = workersResult.map((res) => {
    return res.status === "fulfilled"
      ? {
          status: "resolved",
          data: res.value,
        }
      : { status: "error", data: null };
  });

  console.log(result);
};

await performCalculations();
