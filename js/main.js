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
                }
            ],
        }
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index,1);
        },
    },
});

app.mount('#app');