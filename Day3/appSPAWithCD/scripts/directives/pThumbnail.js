'use strict';

angular.module('trainingAppApp')
  .directive('postThumbnail', function () {
    return {
        restrict:'E',
        templateUrl:'views/templates/pThumbnail.html',
        scope:{
            post:"="
        }
    };
});
