<?php 

$filecontent = file_get_contents("todo-list.json");

$todoList = json_decode($filecontent, true);

if(isset($_POST['todo'])){
    $todoText = [
        'text' => $_POST['todo'],
        'done' => false,
    ];
    array_push($todoList, $todoText);
    file_put_contents('todo-list.json', json_encode($todoList));
}
if(isset($_POST['deleteTodo'])){
    $index = $_POST['deleteTodo'];
    array_splice($todoList, $index, 1);
    file_put_contents('todo-list.json', json_encode($todoList));
}

header('Content-Type: application/json');

echo json_encode($todoList);

?>