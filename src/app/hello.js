angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () {
      var $ctrl = this;
      $ctrl.maVariable = 'hello';
      $ctrl.maListe = ["Salut", "Hello"];

   $ctrl.sauvegarde = function (sauvegarde) {
      var espace_stockage = JSON.stringify(sauvegarde);
      localStorage.setItem('liste', espace_stockage);
    }
    
   $ctrl.ajouterAListe = function () {
     $ctrl.maListe.push($ctrl.maVariable);
     $ctrl.sauvegarde($ctrl.maListe);
    }

   $ctrl.supprimerDeListe = function (el) {
     $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
     $ctrl.sauvegarde($ctrl.maListe);
   }

   $ctrl.import = function () {
     return JSON.parse(localStorage.getItem(espace_stockage));
   };


    
  }

  });
