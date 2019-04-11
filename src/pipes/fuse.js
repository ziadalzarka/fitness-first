const Fuse = require('fuse.js');

angular
  .module('gray')
  .filter('fuse', () => {
    const fuseOptions = {
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "id",
        "name",
        "phone",
        "system",
        "price",
      ]
    };
    return (array, query) => {
      console.log('hey');
      if (!array) { return; }
      if (!query) { return array; }
      const fuse = new Fuse(array, fuseOptions);
      return fuse.search(query);
    }
  });
