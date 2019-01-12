const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      return {
        count: data.count,
        results: data.results
      }
    });
}

console.log(getPeoplePromise(fetch)); // returns Promise { <pending> }

// **********************

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json();

  // console.log(data);
  return {
    count: data.count,
    results: data.results
  }
}

console.log(getPeople(fetch)); // also returns Promise { <pending> }

module.exports = {
  getPeople,
  getPeoplePromise
}
