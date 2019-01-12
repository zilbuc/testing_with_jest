const fetch = require('node-fetch');
const swapi = require('./script2');

// asynchronous testing - needs expect.assertions and:
//  1) done()

it('calls swapi to get people', (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  });
});

// OR 2) just return the promise:

it('calls swapi to get people', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// Creating a mock, that mocks .fetch()

it('getPeople returns count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [0,1,2,3,4,5]
    })
  }));

  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
