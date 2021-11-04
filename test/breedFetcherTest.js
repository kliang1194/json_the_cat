const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('siberian', (error, description) => {
      assert.equal(error, null);
      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDescription, description.trim());

      done();
    });
  });

  it('returns an error where an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('dog', (error, description) => {
      assert.equal(error, "This breed cannot be found!");
      const expectedDescription = null;
    
      assert.equal(expectedDescription, description);
     
      done();
    });
  });
});