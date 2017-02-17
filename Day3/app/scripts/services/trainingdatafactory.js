'use strict';

angular.module('trainingAppApp')
    .factory('trainingDataFactory', function ($http, $q) {
        $http.defaults.transformResponse.push(function (data) {
            //debugger;
            if (data.constructor === Array) {
                for (var i = 0; i < data.length; i++) {
                    data[i].voteCount = 0;
                };
            }
            return data;
        });
        return {
            get: function (id) {
                var deferred = $q.defer();
                var post = {};

                $http.get("http://jsonplaceholder.typicode.com/posts/" + id).then(function (res) {
                    post = res.data;
                    $http.get("http://jsonplaceholder.typicode.com/posts/" + id + "/comments").then(
                        function (resp) {
                            post.comments = resp.data;
                            deferred.resolve(post);
                        },
                        function () {
                            deferred.reject();
                        });
                }, function () {
                    deferred.reject();
                });

                return deferred.promise;
            },
            save: function (post) {
                var deferred = $q.defer();

                $http.post("http://jsonplaceholder.typicode.com/posts", post).then(function (data) {
                    deferred.resolve(data.data);
                }, function () {
                    deferred.reject();
                });

                return deferred.promise;
            },
            getAllPosts: function () {
                var deferred = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/posts/").then(function (data) {
                    deferred.resolve(data.data);
                }, function (err) {
                    deferred.reject("Some Error");
                });

                return deferred.promise;
            },
            getUsers: function () {
                var deferred = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/users").then(function (response) {
                    deferred.resolve(response.data);
                }, function (err) {
                    deferred.reject("Some Error");
                });

                return deferred.promise;
            }
        }
    });