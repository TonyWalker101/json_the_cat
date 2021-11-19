const request = require("request");
const argv = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, (error, response, body) => {

  
  if (error) {
    console.log("HTTP request error.\nUnable to locate: ", error.hostname);
    process.exit();
  }
  
  if (response.statusCode !== 200) {
    console.log("Abnormal HTTP Status Code received: ", response.statusCode);
    process.exit();
  }
  
  const data = JSON.parse(body);

  if (!data[0]) {
    console.log(`The cat breed "${argv[0]}" could not be found in this database.`);
    process.exit();
  }
  console.log(data[0].description);

});