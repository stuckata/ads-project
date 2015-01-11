app.controller('PublishAdCtrl', ['$scope', 'adsData', 'categoriesData', 'townsData', function($scope, adsData, categoriesData, townsData) {
	
	categoriesData.getCategories()
		.$promise
		.then(function (data) {
			$scope.categories = data;
		});

	townsData.getTowns()
		.$promise
		.then(function(data) {
			$scope.towns = data;
		});

	$scope.publishAd = function(ad) {
		adsData.add(ad)
			.$promise
			.then(function (data) {
				$location.path('/');
			});
	}
}]);