const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            // array that contains all tasks objects
            tasks: [
                {
                    text: 'cosa da fare 1',
                    done: true
                },
                {
                    text: 'cosa da fare 2',
                    done: false
                },
                {
                    text: 'cosa da fare 3',
                    done: false
                },
                {
                    text: 'cosa da fare 4',
                    done: false
                },
                {
                    text: 'cosa da fare 5',
                    done: true
                },
                {
                    text: 'cosa da fare 6',
                    done: true
                },
            ],
            // array binded to the input value
            newTask: {
                text: '',
                done: false
            },
            // switch var to change input style if user does not write anything in the input
            isInputEmpty: false,
            // value to be shown in the comment under the input
            message: '',
        }
    },

    methods: {
        // function to remove a task from the array
        removeTask(index) {
            this.tasks.splice(index,1);
        },
        // function to save the input value and add it to the array
        addNewTask() {
            // if the user did not write anything
            if (!this.newTask.text) {
                // set the switch variable to true
                this.isInputEmpty = true;
                // show the tag for the "error" message
                this.message = 'error';
                // stop everything
                return;
            }
            // otherwhise 
            // push the copy of the new task
            this.tasks.push({...this.newTask});
            // empty the input
            this.newTask.text = '';
            // set the switch variable to false 
            this.isInputEmpty = false;
            // show the tag for the "done" message
            this.message = 'done';
        },
        // function to change the status of a task on text click
        changeDone(task) {
            //  invert the status of "done" for the object
            task.done = !task.done;
        },
    },
});

app.mount('#app');