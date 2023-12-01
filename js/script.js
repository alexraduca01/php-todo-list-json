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
        removeTodo(index){
            const data = new FormData();
            data.append('deleteTodo', index);
            axios.post(this.apiUrl, data).then((res) => {
                this.todos = res.data;
            });
            this.todoText = '';
        },
        playSound (sound) {
            if(sound) {
              const audio = new Audio(sound);
              audio.play();
            }
        },
    },
    mounted(){
        this.readTodo();
    }
}).mount('#app');

