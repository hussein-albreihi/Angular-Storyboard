'use strict';

/**
 * @ngdoc filter
 * @name angularProjectApp.filter:sorter
 * @function
 * @description
 * # sorter
 * Filter in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .filter('sortBy', function () {
    return function (items, status) {
      var sorted = [];
      for (var i = 0; i < items.length; i++){
        var item = items[i];
        if(item.status === status){
          sorted.push(item);
        }
      }
      return sorted;
    };
  });
