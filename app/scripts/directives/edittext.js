'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:editText
 * @description
 * # editText
 */
angular.module('angularProjectApp')
  .directive('editText', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the editText directive');
      }
    };
  });
