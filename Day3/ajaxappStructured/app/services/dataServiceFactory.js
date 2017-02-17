angular.module('tApp').factory('DataServiceFactory', ['$http','$q',function ($http, $q) {
    return {
        getAllPosts: function () {
            var deferred = $q.defer();

            $http.get("http://jsonplaceholder.typicode.com/posts").then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject("Some Error");
            });

            return deferred.promise;
        }
    }
}])