function posterController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('poster', {
    templateUrl: 'app/poster.html',
    controller: posterController
  });

