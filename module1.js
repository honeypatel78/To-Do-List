
var app = angular.module('todoApp', [])
app.controller('TodoController', function() {
    var vm = this;
    vm.todos = [
    ];

    vm.addTodo = function() {
        if (vm.newTodo) {
            vm.todos.push({ text: vm.newTodo, completed: false });
            vm.newTodo = '';
        }
    };

    vm.removeTodo = function(index) {
        vm.todos.splice(index, 1);
    };
});
