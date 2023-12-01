<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="css/style.css">
        <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="js/script.js" type="module"></script>
        <title>To Do List</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    
    <body>
        
        <div id="app">
            <div class="container">
                
                <header class="text-center my-3">
                    <img src="img/download.jfif" class="logo" alt="logo">
                    <div class="d-flex justify-content-center gap-2 my-3">
                        <input type="text" class="form-control w-50" v-model="todoText" @keyup.enter="addTodo()">
                        <button @click="addTodo()" class="btn btn-danger">Aggiungi</button>
                    </div>
                </header>

                <div>
                    <div class="list-group">
                        <div v-for="(todo, index) in todos" class="d-flex justify-content-between list-group-item list-group-item-action bg-gradient bg-danger" v-if="todos.length > 0">
                            <span class="cursor-pointer text-white" :class="{'line-through': todo.done}">{{ todo.text }}</span>
                            <i class="fa-solid text-white cursor-pointer fa-xmark"></i>
                        </div>
                        <div class="list-group-item list-group-item-action bg-gradient bg-danger text-center" v-else>
                            <span class="text-white fs-1">Hai fatto tutto!</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </body>

</html>