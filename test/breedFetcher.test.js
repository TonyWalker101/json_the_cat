const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("siberian", (err, desc) => {

      assert.equal(err, null);

      let expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expected, desc.trim());

      done();

    });
  });

  it("returns an error message string for a nonexistent bread, via callback", (done) => {

    fetchBreedDescription("pitbull", (err, desc) => {

      assert.equal(desc, null);

      let expected = `The cat breed "pitbull" could not be found in this database.`;
      
      assert.equal(expected, err.trim());

      done();

    });
  });
});