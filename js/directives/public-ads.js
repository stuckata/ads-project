app.directive('publicAds', function(){
	return {
		controller: 'PublicAdsCtrl',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/public/public-ads.html',
		replace: true
	};
}]);