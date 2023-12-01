// Descrizione:
// Rifare l'esercizio della to do list.
// Ogni todo sarà un oggetto, formato da tre proprietà:
//  `text`, una stringa che indica il testo del todo
// `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
//   id, un numero intero positivo incrementale  (univoco per ogni task)

// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

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

