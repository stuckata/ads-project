app.factory('filter', function() {

	var params = {};

	function filterByTown (town) {

		params.townId = town.id;
	}

	function filterByCategory (category) {
		
		params.categoryId = category.id;
	}

	function getParams () {
		
		return params;
	}

	function setPageParams (pageParams) {
		// body...
	}

	return {
		filterByTown: filterByTown,
		filterByCategory: filterByCategory,
		getParams: getParams,
		setPageParams: setPageParams
	};
});