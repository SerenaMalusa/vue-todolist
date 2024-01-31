const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tasks: [
                {
                    text: 'cosa da fare 1',
                    done: false
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
                    done: false
                },
                {
                    text: 'cosa da fare 6',
                    done: false
                }
            ],
        }
    },
    methods: {
        
    },
});

app.mount('#app');