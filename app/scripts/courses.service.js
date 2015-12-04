(function() {
  angular
    .module('app')
    .factory('Courses', Courses);
  function Courses($http) {
    function _get() {
      return $http.get('/api/courses.json');
    }
    return {
      get: _get
    }
  }
}());
