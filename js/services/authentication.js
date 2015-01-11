app.factory('authentication', function() {

	var key = 'user';

	function saveUserData(data) {

		localStorage.setItem(key, angular.toJson(data));
	}

	function getUserData() {

		return angular.fromJson(localStorage.getItem(key));
	}

	function getHeaders() {

		var headers = {};
		var userData = getUserData();

		if (userData) {
			headers.Authorization = 'Bearer ' + getUserData().access_token;
		}		

		return headers;
	}

	function removeUser() {

		localStorage.removeItem(key);
	}

	function isAdmin() {

		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}

	function isLoggedIn () {
		
		return !!getUserData();
	}

	function getUsername () {
		
		if (getUserData()) {
			var username = getUserData().username;
			return username;
		} 
		return '';
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin,
		isLoggedIn: isLoggedIn,
		getUsername: getUsername
	}
})