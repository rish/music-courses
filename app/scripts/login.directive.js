(function() {
  angular
    .module('app')
    .directive('xyzLoginButton', xyzLoginButton);
  function xyzLoginButton() {
    var directive = {
      templateUrl: 'templates/login.html',
      restrict: 'EA'
    };
    return directive;
  }
}());
