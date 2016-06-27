function movieController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('movie', {
    templateUrl: 'app/movie.html',
    controller: movieController
  });

