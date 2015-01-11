app.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){

	var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
		update: { method: 'PUT' }
	});

	var postResource = $resource(baseServiceUrl + 'user/ads', {
		update: { method: 'POST' }
	});


	function getPublicAds(filterParams) {

		return resource.get(filterParams);
	};

	function addAd(ad) {

			return postResource
				.save(ad)
				.$promise
				.then(function (data) {
					$location.path('/');
				});
	};

	function editAd(adId, ad) {

		return resource.update({ id: adId }, ad);
	};

	function deleteAd(adId) {

		return resource.delete({ id: adId });
	};

	function getAdById(adId) {

		return resource.get({ id: adId });
	};

	return {
		getPublicAds: getPublicAds,
		add: addAd,
		edit: editAd,
		delete: deleteAd,
		getAdById: getAdById
	};
}]);