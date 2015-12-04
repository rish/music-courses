(function() {
  angular
    .module('app')
    .config(AppConfig);
  function AppConfig($stateProvider, $urlRouterProvider) {
    console.info('AppConfig');
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: "templates/index.html",
        controller: "AppController"
      });
  }
}());
