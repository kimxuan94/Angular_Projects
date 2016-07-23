"use strict";

var floatApp = angular.module('floatApp', []);

floatApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/Dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardController'
		}).
		when('/Notifications', {
			templateUrl: 'views/notifications.html',
			controller: 'NotController'
		}).

		//Add-on tests
		when('/Collaborateurs', {
			templateUrl: 'views/collaborateurs.html',
			controller: 'CollabController'
		}).
		when('/Park', {
			templateUrl: 'views/véhicules.html',
			controller: 'ParkController'
		}).
		when('/Contrats', {
			templateUrl: 'views/contrats.html',
			controller: 'ContractsController'
		}).
		otherwise({
			redirectTo: '/Dashboard'
		});
	}]);

//Declarative controllers functions
floatApp.controller('DashboardController', function($scope) {
	$scope.title = 'Administration';
	});

floatApp.controller('NotController', function($scope) {
	$scope.title = 'Notifications';
});

//Anothers declaratives functions for forms part
floatApp.controller('CollabController', function($scope) {
	$scope.legend = 'Ajouter un collaborateur';
	        // $scope.regEx = "/^\\d+$/"; //Set regEx
        $scope.user = {}; //Instanciate object    
        //Define attributes
        // $scope.employees.matRH = 01234;
        // $scope.employees.nomSalarie = "Smith";
        // $scope.employees.prenomSalarie = "Stannislas";
        // $scope.employees.infoResidence = "Entrez une adresse valide";
        // $scope.employees.codePostal = "Entrez un code postal";
        // $scope.employees.ville = "Entrez une ville";
        // $scope.employees.mobileNum = "Entrez un numero";
        // $scope.employees.detailsPJ = "Aucune PJ trouvée";
        // $scope.employees.avtgNature = "Entrez un montant";
        // $scope.employees.debutContrat = "Date au format JJ/MM/AA";
        // $scope.employees.finContrat = "Date au format JJ/MM/AA";
        // $scope.employees.Comments = "BOUH";
           $scope.placematRH = "Entrez un matricule";
            
        //Scope models
        $scope.models = [
             {name: "matRH", caption: "Matricule RH", isDisabled: false, isShow: true, minlength: 1, maxlength: 5, pattern: "/^\\d+$/"},
             {name: "nomSalarie", caption: "Nom:", isDisabled: false, isShow: true, minlength: 2, maxlength: 15, pattern: "[^1-6]" },
             {name: "prenomSalarie", caption: "Prénom:", isDisabled: false, isShow: true, minlength: 2, maxlength: 15},
             {name: "infoResidence", caption: "Adresse de résidence:", isDisabled: false, isShow: true},
             {name: "codePostal", caption: "Code postal:", isDisabled: false, isShow: true, maxlength: 5, pattern: "[^1-6]" },
             {name: "ville", caption: "Ville:", isDisabled: false, isShow: true, minlength: 3, pattern: "[^1-6]" },
             {name: "mobileNum", caption: "Numéro de téléphone:", isDisabled: false, isShow: true, pattern: "(0|\\+33|0033)[1-9][0-9]{8}", minlength: 2, maxlength: 14 },
             // {name: "detailsPJ", caption: "Pièces à joindre:", isDisabled: false, isShow: true, minlength: 2, maxlength: 15, pattern: "[^1-6]" },
             {name: "avtgNature", caption: "Avantages en nature:", isDisabled: false, isShow: true, minlength: 2, maxlength: 15, pattern: "[^1-6]" },
             // {name: "debutContrat", caption: "Début de contrat:", isDisabled: false, isShow: true, maxlength: 7, pattern: "[^1-6]" },
             // {name: "finContrat", caption: "Fin de contrat:", isDisabled: false, isShow: true, maxlength: 7, pattern: "[^1-6]" },
        ];
        $scope.selection = {
        repeatSelect: null,
        selectProfession: [
        {id: 'Vous avez selectionné la catégorie APM', name: 'APM'},
        {id: 'Vous avez selectionné la catégorie  AR', name: 'AR'},
        {id: 'Vous avez selectionné la catégorie  ARS', name: 'ARS'}
        ],
        };


        //Controller test
   //      $scope.uploadFile = function(files) {
			//     var fd = new FormData();
			//     //Take the first selected file
			//     fd.append("file", files[0]);

			//     $http.post(uploadUrl, fd, {
			//         withCredentials: true,
			//         headers: {'Content-Type': undefined },
			//         transformRequest: angular.identity
			//     }).success( ...all right!... ).error( ..damn!... );

			// }; 
            // $scope.matRegx = "/^\\d+$/";
    });

floatApp.controller('ParkController', function($scope) {
	$scope.legend = 'Ajouter un véhicule';
	});

floatApp.controller('ContractsController', function($scope) {
	$scope.legend = 'Gérer mes contrats';
	});


// var ngMessagesAlerts = angular.module('ngMessagesAlerts' ['ngMessages']);
// .controller('MainCtrl', MainCtrl);
  
// function MainCtrl() {
  
// };

//angular.bootstrap(document.getElementById('floatapp'), ['floatApp']);

floatApp.controller("ProfileController", function() {
    var model = this;

    model.message = "";
    model.submit = function(valid) {
      if(valid) {
        model.message = "Your new number is " + model.number;
      }
      else {
        model.message = "Needs fixing!";
      }
    };
  });

// floatApp.controller("DateController", function() {

// var nowTemp = new Date();
// var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

// var checkin = $('#dp1').datepicker({

//     beforeShowDay: function (date) {
//         return date.valueOf() >= now.valueOf();
//     },
//     autoclose: true

// }).on('changeDate', function (ev) {
//     if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

//         var newDate = new Date(ev.date);
//         newDate.setDate(newDate.getDate() + 1);
//         checkout.datepicker("update", newDate);

//     }
//     $('#dp2')[0].focus();
// });


// var checkout = $('#dp2').datepicker({
//     beforeShowDay: function (date) {
//         if (!checkin.datepicker("getDate").valueOf()) {
//             return date.valueOf() >= new Date().valueOf();
//         } else {
//             return date.valueOf() > checkin.datepicker("getDate").valueOf();
//         }
//     },
//     autoclose: true

// }).on('changeDate', function (ev) {});

// });
