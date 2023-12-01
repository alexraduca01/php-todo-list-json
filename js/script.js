const { createApp } = Vue;

createApp({
    data() {
        return {
            objId: 3,
        };
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        addTodo(){
            this.todos.push({
                id: this.objId++,
                text: this.todoText,
                done: false,
            })
        },
        doneTodo(index){
            this.todos[index].done =!this.todos[index].done;
        },
        playSound (sound) {
            if(sound) {
              const audio = new Audio(sound);
              audio.play();
            }
        },
    },
}).mount('#app');

