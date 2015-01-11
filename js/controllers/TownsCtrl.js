app.controller('TownsCtrl', ['$scope', '$rootScope', 'townsData', 'filter', function($scope, $rootScope, townsData, filter){
	
	$scope.limitTowns = 5;

	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;
		});

	$scope.toggleTowns = function () {
		
		if($scope.limitTowns == 5){
			$scope.limitTowns = $scope.towns.length;
		} else {
			$scope.limitTowns = 5;
		}
	}

	$scope.townClicked = function (town) {
		
		filter.filterByTown(town);
		$rootScope.$broadcast('townClicked', town);
	};
}]);