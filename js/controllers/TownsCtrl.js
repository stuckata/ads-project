app.controller('TownsCtrl', ['$scope', 'townsData', function($scope, townsData){
	
	$scope.towns = townsData.getTowns();
}]);