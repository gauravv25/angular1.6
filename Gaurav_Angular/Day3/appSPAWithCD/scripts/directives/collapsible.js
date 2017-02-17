'use strict';

angular.module('trainingAppApp')
    .directive('collapsible', function () {
        return {
            replace: true,
            restrict: 'E',
            transclude: true,
            template: '<div><h4 ng-click="toggle()">{{comment.name}}</h4><div ng-transclude ng-show="visible"></div></div>',
            controller: function ($scope) {
                $scope.visible = true;
                $scope.toggle = function () {
                    $scope.visible = !$scope.visible;
                };
            }
        };
    });