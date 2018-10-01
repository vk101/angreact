angular.module("reportApp",['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller('reportController', function($scope){
        $scope.reportList = [
            {name:"Report1", type:"A", owner:"M1"},
            {name:"Report2", type:"A", owner:"M2"},
            {name:"Report3", type:"A", owner:"M3"},
            {name:"Report4", type:"A", owner:"M4"},
        ];
    });