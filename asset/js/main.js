var app = new Vue({
    el: '#root',
    data: {
        newTask: '',
        toDoList: [
            
        ]

    },
    methods: {
        addTask: function() {
            this.toDoList.push({
                text: this.newTask,
                done: false
            },)
            this.newTask = "";
        },

        removeTask: function(index) {
             this.toDoList.splice(index, 1)
        },
        test: function(index) {
            this.toDoList[index] = done = true
       },


    }
});