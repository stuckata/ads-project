app.directive('leftPublicSidebar', function() {
	return {
		controller: 'HomeCtrl',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/public/left-sidebar.html',
		replace: true,
	};
});