app.factory('authentication', ['localStorageServiceProvider', function(localStorageServiceProvider) {

	var key = 'user';

	function saveUserData (data) {
		localStorageServiceProvider.set(key, data);
	}

	function getUserData (data) {
		localStorageServiceProvider.set(key);
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData
	}
}])