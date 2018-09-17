angular.module("contosoApp").controller("StudentController", function ($scope,$http) {
    $scope.whatisjavascript = "Javascript is like wife!";
    $scope.whatisangularjs = "AngularJS is like girlfriend!";

    $scope.saveStudent = function (data) {
        console.log(data);
        $http.get("http://localhost:53788/call-my-api").then(function (response) {
            console.log(response);
        });
    };
});