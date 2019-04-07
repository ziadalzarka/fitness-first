angular.module('app')
  .filter('translate', function() {
    const translations = require('./ar.json');
    return function(input) {
      const parts = input.split('.');
      let translation = translations;
      for (const part of parts) {
        translation = translation[part] || input;
      }
      return translation;
    };
  })