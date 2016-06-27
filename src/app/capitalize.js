function capitalize() {
  return function (text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  };
}

angular
  .module('app')
  .filter('capitalize', capitalize);

