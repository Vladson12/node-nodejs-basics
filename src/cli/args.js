const parseArgs = () => {
  // Write your code here
  let args = process.argv.slice(2);
  while (args.length !== 0) {
    console.log(`${args[0].slice(2)} is ${args[1]}`);
    args = args.slice(2);
  }
};

parseArgs();
