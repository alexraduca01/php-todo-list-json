const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Catturare Giratina',
                    done: false,
                },
                {
                    id: 2,
                    text: 'Battere la lega',
                    done: true,
                },
                {
                    id: 3,
                    text: 'Completare il pokédex',
                    done: false,
                },
            ],
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

