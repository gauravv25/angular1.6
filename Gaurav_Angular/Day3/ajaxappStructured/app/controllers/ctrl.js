angular.module('tApp').controller('Ctrl', ['$scope','DataServiceFactory','$log',function ($scope, DataServiceFactory, $log) {
    $scope.sortby = 'id';

    $scope.srList = [{
            val: 'id',
            text: 'Id'
        },
        {
            val: 'title',
            text: 'Title'
        },
        {
            val: '-title',
            text: 'Title Desc'
        },
        {
            val: 'body',
            text: 'Body'
        },
        {
            val: '-body',
            text: 'Body Desc'
        }
    ];

    var dPromise = DataServiceFactory.getAllPosts();
    dPromise.then(function (data) {
        $scope.posts = data;
    }, function (msg) {
        $log.error(msg);
    });
}]);