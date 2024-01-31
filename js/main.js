const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
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
            newTask: {
                text: '',
                done: false
            },
            isInputEmpty: false,
            message: '',
        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index,1);
        },
        addNewTask() {
            if (this.newTask.text == false) {
                this.isInputEmpty = true;
                this.message = 'error';
                return;
            }
            this.tasks.push({...this.newTask});
            this.newTask.text = '';
            this.isInputEmpty = false;
            this.message = 'done';
        },
        changeDone(task) {
            task.done = !task.done;
        },
    },
});

app.mount('#app');