const parseEnv = () => {
  // Write your code here
  const envObj = process.env;
  for (const [key, value] of Object.entries(envObj)) {
    if (key.startsWith("RSS_")) {
      console.log(`${key}=${value}`);
    }
  }
};

parseEnv();
