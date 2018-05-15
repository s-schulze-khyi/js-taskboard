(function () {
    "use strict";
    /**
     * check if localStorage is set
     */
    var taskList = "";
    var taskInLocalStorage = localStorage.getItem("tasks");
    // if (!taskInLocalStorage) {
    getTasksFromJson();

    // }

    function getTasksFromJson() {
        $.ajax({
            url: "tasks.json",
        }).done(function (data) {
            // console.log('task content: ', tasks);
            setTaskToLocalStorage(data)
        });
    }

    function setTaskToLocalStorage(data) {
        taskInLocalStorage = localStorage.setItem("tasks", JSON.stringify(data));
        console.log(data);
        taskList = data;

        getTodoTasks();
        getInProgressTasks();
        getReviewTasks();
        getDoneTasks();
    }

    function getTodoTasks() {
        taskList.todo.map(
            function(task){
                $('#todo .tasks').append('<div>'+task.title+'</div>');
            })
    }

    function getInProgressTasks() {
        taskList.inprogress.map(
            function(task){
                $('#inprogress .tasks').append('<div>'+task.title+'</div>');
            })
    }

    function getReviewTasks() {
        taskList.review.map(
            function(task){
                $('#review .tasks').append('<div>'+task.title+'</div>');
            })
    }

    function getDoneTasks() {
        taskList.done.map(
            function(task){
                $('#done .tasks').append('<div>'+task.title+'</div>');
            })
    }

    $('#clearLocalStorageButton').click(function (){
        clearLocalstorage();
    });

    function clearLocalstorage(){
        localStorage.clear();
        console.log('localStorage cleared')
    }

})();