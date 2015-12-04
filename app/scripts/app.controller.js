(function() {
  angular
    .module('app')
    .controller('AppController', AppController);
  function AppController(
    $scope,
    Courses
  ) {
    console.info('AppController');

    var vm = this;

    Courses.get().then(function(response) {
      console.info('Courses', response);
    });
  }
}());
