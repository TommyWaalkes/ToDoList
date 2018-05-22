"use strict";
{
  function todoController() {
    var vm = this;
    vm.tasks = [
      {task:"get a haircut", className:"completed"},
      {task:"take a shower",className:""},
      {task:"buy groceries",className:""},
      {task:"pay bills",className:""},
      {task:"disregard scrubs", className:""},
      {task: "Clean Dishes", className:""},
      {task: "Fly a Kite", className:""}
    ];

    vm.addCompleted = function(i){
      let task = vm.tasks[i];
      task.className = "completed";
      vm.tasks[i] = task;
    }

    vm.removeTask = function(i){
      vm.tasks.splice(i,1);    
    }

    vm.addTask = function(taskName){
      console.log(taskName);
      let task = {
        task: taskName,
        className : ""
      }
      vm.tasks.push(task);
    }
  }

  angular
    .module("todoApp")
    .controller("todoController", todoController);

};

