angular.module('contosoApp').config(function ($stateProvider) {
    $stateProvider.state("home", {
        url: '/',
        template: 'index',
        controller: 'StudentController'
    }).state("studentForm", {
        url: '/student-form',
        views: {
            'subview': {
                templateUrl: "student.form.html",
                controller: "StudentController"
            }
        }
    }).state("studentList", {
        url: '/student-list',
        views: {
            'subview': {
                templateUrl: "student.list.html",
                controller: "StudentController"
            }
        }
    });
});