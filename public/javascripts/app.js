/*global angular*/
angular.module('app', [])
    .factory('socket', function ($rootScope) {
        var socket = io.connect('http://localhost');

        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                console.log('emit: ' + eventName);

                socket.emit(eventName, data, function () {
                    console.log('result: ' + JSON.stringify(arguments));

                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    })
    .controller('enterpriseCtrl', ['$scope', function ($scope) {
        $scope.enterpriseCrew = [
            {name: 'Picard', description: 'Captain'},
            {name: 'Riker', description: 'Number One'},
            {name: 'Worf', description: 'Security'}
        ]
    }])
    .controller('socketCtrl', ['$scope', 'socket', function ($scope, socket) {
        socket.emit('getAll', {}, function(data) {
            $scope.enterpriseCrew = data;
        });
    }]);

