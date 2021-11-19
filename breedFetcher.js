const request = require("request");

// Main function that takes in the parameter and uses fetch to return breed info

const fetchBreedDescription = breedName => {
  return fetch(breedName);
};

// Helper function used to retrieve breed from The Cat API

const fetch = breedName => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    
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
      console.log(`The cat breed "${breedName}" could not be found in this database.`);
      process.exit();
    }
    console.log(data[0].description);
  
  });
};

module.exports = { fetchBreedDescription };