// Function takes in a breedname and attempts to fetch data, if not it returns an error

const request = require("request");

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error) {
      const errorMessage1 = `Unable to locate "${error.hostname}"`;
      return callback(errorMessage1, null);
    }
    
    if (response.statusCode !== 200) {
      const errorMessage2 = `Received abnormal HTTP status code "${response.statusCode}"`;
      return callback(errorMessage2, null);
    }
    
    const data = JSON.parse(body);
  
    if (!data[0]) {
      const errorMessage3 = `The cat breed "${breedName}" could not be found in this database.`;
      return callback(errorMessage3, null);
    }
  
    return callback(null, (data[0].description));
  
  });
};



module.exports = { fetchBreedDescription };