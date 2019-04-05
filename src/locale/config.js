angular.module('app')
  .filter('translate', () => {
    const translations = require('./ar.json');
    return (input) => {
      const parts = input.split('.');
      let translation = translations;
      for (const part of parts) {
        translation = translation[part] || input;
      }
      return translation;
    };
  })