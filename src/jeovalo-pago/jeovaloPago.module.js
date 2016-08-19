(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('jeovaloPago.config', [])
      .value('jeovaloPago.config', {
          debug: true
      });

  // Modules
  angular.module('jeovaloPago.directives', []);
  angular.module('jeovaloPago.filters', []);
  angular.module('jeovaloPago.services', []);
  angular.module('jeovaloPago',
      [
          'jeovaloPago.config',
          'jeovaloPago.directives',
          'jeovaloPago.filters',
          'jeovaloPago.services'
      ]);

})(angular);
