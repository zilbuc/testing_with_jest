const googleSearch = require('./script');

const dbMock = [
  'dogs.com',
  'cheesepuff.com',
  'doggydog.com',
  'pets.com'
];

it('is a silly test', () => {
  expect('hello').toEqual('hello');
});

describe('google search tests', () => {
  it('tests the google search', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dogs', dbMock)).toEqual(['dogs.com']);
  });

  it('works with undefined and null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('returns no more than 3 results', () => {
    expect(googleSearch('com', dbMock).length).toEqual(3);
  });

});
