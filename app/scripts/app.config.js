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
        controller: "AppController",
        views: {
          'header': {
            templateUrl: 'templates/header.html'
          },
          'hero': {
            templateUrl: 'templates/hero.html'
          },
          'content': {
            templateUrl: 'templates/content.html'
          },
          'footer': {
            templateUrl: 'templates/footer.html'
          }
        }
      })
  }
}());
