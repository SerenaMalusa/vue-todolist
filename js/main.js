const { createApp } = Vue;

const app = createApp ({
    data() {
        return {

        }
    },
    methods: {
        consoleLog() {
            console.log('vue connected and working');
        }
    },
});

app.mount('#app');