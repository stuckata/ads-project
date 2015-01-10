app.factory('filter', function() {

	var filterParams = {};

	function filterByTown (town) {

		filterParams.townId = town.id;
	}

	function filterByCategory (category) {
		
		filterParams.categoryId = category.id;
	}

	function getFilterParams () {
		
		return filterParams;
	}

	return {
		filterByTown: filterByTown,
		filterByCategory: filterByCategory,
		getFilterParams: getFilterParams
	};
});