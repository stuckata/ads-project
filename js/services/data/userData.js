app.factory('userData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){

	var resource = $resource(baseServiceUrl, paramDefaults, actions)

	function registerUser(user) {

	}

	function loginUser(user) {

	}

	function logoutUser() {

	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	};
}])