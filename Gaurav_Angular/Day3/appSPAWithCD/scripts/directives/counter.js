'use strict';

angular.module('trainingAppApp')
  .directive('counter', function () {
    return {
        restrict:'E',
        templateUrl:'views/templates/counter.html',
        scope:{
            count:"@",
            upvote:"&",
            downvote:"&"
        }
    };
});
