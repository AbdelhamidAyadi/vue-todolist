var app = new Vue({
    el: '#root',
    data: {
        newTask: '',
        toDoList: [
           
    ],


    },
    methods: {
        addTask: function () {
            if (this.newTask == '') {
                alert('Please enter a valid task')

            } else if (this.checkTask(this.newTask)) {
                alert('You already wrote this task')
            } else {
                this.toDoList.push({
                    text: this.newTask,
                    done: false
                }, )
                
            }
            this.newTask = "";
           


        },

        checkTask: function (task) {
            for (let i = 0; i < this.toDoList.length; i++) {
                if (this.toDoList[i]['text'] == task) {
                    return true
                    
                }
                
                
            }
        },

        removeTask: function (index) {
            this.toDoList.splice(index, 1)
        },
        test: function (index) {


            if (this.toDoList[index]['done'] == false) {
                this.toDoList[index]['done'] = true


            } else if (this.toDoList[index]['done'] == true) {
                this.toDoList[index]['done'] = false


            }

        },


    }
});