function controleur($scope) {
			$scope.message = '';
      // $scope.matReg = "/^\\d+$/";
			$scope.utilisateurs = [''];
			$scope.user = {nom: '', prenom: '', role:'Membre'};
			$scope.soumission = function (valid) {
				if(valid) {
					$scope.utilisateurs.push($scope.user);
					$scope.user = {nom: '', prenom: '', role:'Membre'};
				}
				else {
					$scope.messageClass ='alert-danger';
					$scope.message = 'Désolé mais il y a des données non valides !';
				}
            $scope.reset();
			};
		}

function Ctrl($scope) {
  $scope.services = [
    {ServiceID: 1, ServiceName: 'APM'},
    {ServiceID: 2, ServiceName: 'AR'},
    {ServiceID: 3, ServiceName: 'ARS'}
  ];

   $scope.vehicules = [
    {VehiculeID: 1, VehiculeName: 'Alfa Romeo'},
    {VehiculeID: 2, VehiculeName: 'BMW'},
    {VehiculeID: 3, VehiculeName: 'Audi'}
  ];

  $scope.regEx = "/^\\d+$/"; //Set regEx
  // $scope.ctrl = {}; //Instanciate object    
  $scope.user = [
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
}

// Checking function
floatApp.controller('ExampleController', ['$scope', function($scope) {
      $scope.example = {
        text: '',
        word: /^\d+$/, //Regex allows only numeric
        word2: /^\D+$/, //Regex allows only alpha
        // word3: /^\D+$/ 
        word3: /^[a-z\d\-_\s]+$/i //Regex allows alphanum and space
      };
    }]);

//For numeric value
var text = element(by.binding('example.text'));
var valid = element(by.binding('myForm.input.$valid'));
var input = element(by.model('example.text'));

it('should initialize to model', function() {
  expect(text.getText()).toContain('guest');
  expect(valid.getText()).toContain('true');
});

it('should be invalid if empty', function() {
  input.clear();
  input.sendKeys('');

  expect(text.getText()).toEqual('text =');
  expect(valid.getText()).toContain('false');
});
// it('should be invalid if multi word', function() {
//   input.clear();
//   input.sendKeys('hello world');

//   expect(valid.getText()).toContain('false');
// });

// floatApp.controller('SelectController', function($scope) {   
//   $scope.data = {
//     singleSelect: null,
//     multipleSelect: [],
//     option1: 'option-1',
//    };
// };



// var value = element(by.binding('example.value | date: "yyyy-MM-dd"'));
// var valid = element(by.binding('myForm.input.$valid'));
// var inputl = element(by.model('example.value'));

// function setInput(val) {
//   // set the value of the element and force validation.
//   var scr = "var ipt = document.getElementById('exampleInput'); " +
//   "ipt.value = '" + val + "';" +
//   "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
//   browser.executeScript(scr);
// }

// it('should initialize to model', function() {
//   expect(value.getText()).toContain('2013-10-22');
//   expect(valid.getText()).toContain('myForm.inputl.$valid = true');
// });

// it('should be invalid if empty', function() {
//   setInput('');
//   expect(value.getText()).toEqual('value =');
//   expect(valid.getText()).toContain('myForm.inputl.$valid = false');
// });

// it('should be invalid if over max', function() {
//   setInput('2015-01-01');
//   expect(value.getText()).toContain('');
//   expect(valid.getText()).toContain('myForm.inputl.$valid = false');
// });

// floatApp.controller("SelectController", function($scope) {
// });

// .controller("PickDateController", function() {

// });

// .controller("UploadController", function() {

// });

// .controller("MatRegController", function() {

// });

// .controller("SubmitController", function() {

// });

// .controller("AngulatToSQLController", function() {

// });

floatApp.controller("SetDateCtrl", function() {
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#dp1').datepicker({

    beforeShowDay: function (date) {
        return date.valueOf() >= now.valueOf();
    },
    autoclose: true

}).on('changeDate', function (ev) {
    if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout.datepicker("update", newDate);

    }
    $('#dp2')[0].focus();
});


var checkout = $('#dp2').datepicker({
    beforeShowDay: function (date) {
        if (!checkin.datepicker("getDate").valueOf()) {
            return date.valueOf() >= new Date().valueOf();
        } else {
            return date.valueOf() > checkin.datepicker("getDate").valueOf();
        }
    },
    autoclose: true

}).on('changeDate', function (ev) {});
});


floatApp.controller('SelectController', ['$scope', function($scope) {
   $scope.professionList = {
    singleSelect: "",
    multipleSelect: [],
    option1: 'option-1'
   };

   $scope.collabList = {
    singleSelect: "",
    multipleSelect: [],
    option1: 'option-1'
   };

   $scope.vhList = {
    singleSelect: "",
    multipleSelect: [],
    option1: 'option-1'
   };
}]);


// $scope.reset = function() {
//     $scope.list = {};
// }
