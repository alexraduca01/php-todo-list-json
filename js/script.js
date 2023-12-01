const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todos: [],
            todoText: '',
            objId: 3,
        };
    },
    methods: {
        readTodo(){
            axios.get(this.apiUrl).then((res) => {
                this.todos = res.data;
            })
        },
        addTodo(){
            const data = new FormData();
            data.append('todo', this.todoText);
            axios.post(this.apiUrl, data).then((res) => {
                this.todos = res.data;
            });
            this.todoText = '';
        },
    },
    mounted(){
        this.readTodo();
    }
}).mount('#app');

