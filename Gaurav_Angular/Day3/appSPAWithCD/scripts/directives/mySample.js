'use strict';

angular.module('trainingAppApp')
  .directive('mySample', function () {
    //Directive Definition Object
    return {
        restrict:'E',
        template:'<input type="text" ng-model="name"> {{name}}<br/>',
        scope:{}
    };
});
