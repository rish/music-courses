(function() {
  angular
    .module('app')
    .controller('ContentController', ContentController);
  function ContentController(
    Courses
  ) {
    console.info('ContentController');
    var vm = this;
    Courses.get().then(function(response) {
      vm.levels = response.data;
    });
  }
}());
