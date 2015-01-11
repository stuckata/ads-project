app.controller('CategoriesCtrl', ['$scope', '$rootScope', 'categoriesData', 'filter', function($scope, $rootScope, categoriesData, filter) {
	
	$scope.limitCategories = 5;

	categoriesData.getCategories()
		.$promise
		.then(function (data) {
			$scope.categories = data;
		});

	$scope.toggleCategories = function () {

		if($scope.limitCategories == 5){
			$scope.limitCategories = $scope.categories.length;
		} else {
			$scope.limitCategories = 5;
		}
	};

	$scope.categoryClicked = function (category) {

		filter.filterByCategory(category);
		$rootScope.$broadcast('categoryClicked', category);
	};
}]);