angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $location, Auth) {

	var self = this;

	// get info if a person is logged in
	self.loggedIn = Auth.isLoggedIn();

	// check to see if a user is logged in on every request
	$rootScope.$on('$routeChangeStart', function() {
		self.loggedIn = Auth.isLoggedIn();

		// get user information on page load
		Auth.getUser()
			.then(function(data) {
				self.user = data.data;
			});
	});

	// function to handle login form
	self.doLogin = function() {
		self.processing = true;

		// clear the error
		self.error = '';

		Auth.login(self.loginData.username, self.loginData.password)
			.success(function(data) {
				self.processing = false;

				// if a user successfully logs in, redirect to users page
				if (data.success)
					$location.path('/users');
				else
					self.error = data.message;

			});
	};

	// function to handle logging out
	self.doLogout = function() {
		Auth.logout();
		self.user = '';

		$location.path('/login');
	};

	self.createSample = function() {
		Auth.createSampleUser();
	};

});
