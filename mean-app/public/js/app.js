angular.module('friendsApp', ['routerRoutes', 'ngAnimate'])

// create the controller and inject Angular's
// this will be the controller for the ENTIRE site
.controller('mainController', function() {

    // create a bigMessage variable to display in our view
    this.bigMessage = 'A smooth sea never made a skilled sailor.';

})

// home page specific controller
.controller('homeController', function() {
		this.message = 'This is the home page!';
})

// about page controller
.controller('aboutController', function() {
		this.message = 'Look! I am an about page.';
})

// contact page controller
.controller('contactController', function() {
		this.message = 'Contact us! JK. This is just a demo.';
});







































// // name our angular app
// angular.module('friendsApp', [])
//
// .controller('mainController', function() {
//
// 	// bind this to vm (view-model)
//   var vm = this;
//
//   // define variables and objects on this
//   // this lets them be available to our views
//
// 	// define a basic variable
// 	vm.message = 'Hey there! Come and see how good I look!';
//
// 	// define a list of items
// 	vm.computers = [
// 		{ name: 'Macbook Pro', color: 'Silver', nerdness: 7 },
// 		{ name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6 },
// 		{ name: 'Chromebook', color: 'Black', nerdness: 5 }
// 	];
//
// 	// information that comes from our form
//   vm.computerData = {};
//
//   vm.addComputer = function() {
//
//       // add a computer to the list
//       vm.computers.push({
//           name: vm.computerData.name,
//           color: vm.computerData.color,
//           nerdness: vm.computerData.nerdness
//       });
//
//       // after our computer has been added, clear the form
//       vm.computerData = {};
//   };
//
// });
