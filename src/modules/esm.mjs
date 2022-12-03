import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { getFileDir } from "../util/dirAndFileName.js";

const random = Math.random();

const jsonFileToImport = random > 0.5 ? "./files/a.json" : "./files/b.json";
const unknownObject = await import(jsonFileToImport, {
  assert: { type: "json" },
});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const { __dirname, __filename } = getFileDir(import.meta.url);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject.default);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
