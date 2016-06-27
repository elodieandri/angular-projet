angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: function () {
      var $ctrl = this;
      $ctrl.maVariable = 'hello';
      $ctrl.maListe = ["Salut", "Hello"];

      $ctrl.sauvegarde = function (sauvegarde) {
        var espaceStockage = JSON.stringify(sauvegarde);
        localStorage.setItem('liste', espaceStockage);
      };

      $ctrl.ajouterAListe = function () {
        $ctrl.maListe.push($ctrl.maVariable);
        $ctrl.sauvegarde($ctrl.maListe);
      };

      $ctrl.supprimerDeListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
        $ctrl.sauvegarde($ctrl.maListe);
      };

      $ctrl.import = function () {
        return JSON.parse(localStorage.getItem('liste'));
      };
    }
  });

