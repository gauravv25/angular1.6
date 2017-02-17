'use strict';

angular.module('trainingAppApp')
    .controller('NewpostCtrl', function (trainingDataFactory, $log) {
        var self = this;

        self.open = function () {
            self.opened = true;
        };

        trainingDataFactory.getUsers().then(function (d) {
            self.users = d;
        }, function (err) {
            $log.info(err);
        });

        self.savePost = function (frm, p) {
            if (frm.$valid) {
                trainingDataFactory.save(p).then(function (d) {
                    alert("Data Saved....");
                }, function (err) {
                    $log.error(err);
                });
            } else {
                console.error("Invalid Form...");
            }
        }
    });