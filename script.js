function validationCtrl($scope) {
   var validFirstName = "Krishna";
   var validLastName="Vemula"
   var validEmail = "cvemula08@gmail.com";
   var validAddress = "312 Harrishburg"
   
   $scope.reset = function(){
		$scope.firstName = validFirstName;
		$scope.lastName = validLastName;
		$scope.email = validEmail;
		$scope.address=validAddress;
   }   
   
   $scope.checkData = function() {
		if ($scope.firstName != validUsername || $scope.email != validEmail || $scope.address != validAddress || $scope.lastName != validLastName ){
			alert("Invalid data");
		} else {
			alert("succesully loaded the form page");
		}
	}
}