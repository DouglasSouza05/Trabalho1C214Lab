import { useState } from "react";

function ToDoList() {
  // Definindo estados iniciais para as tarefas e o texto de entrada
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const inputValidation = (input) => {
    return input.trim().length > 0;
  };

  const handleClick = (clickedIndex) => {
    // Mapeia todas as tasks
    const updatedTasks = tasks.map((task, index) => {
      // Dentro do bloco if é criado um novo objeto que representa o atual
      if (index === clickedIndex) {
        return {
          // "...task" utiliza o operador de propagação para criar uma cópia, mantendo todas as propriedades do original, mudando somente o status
          ...task,
          status: task.status === "A Fazer" ? "Concluído" : "A Fazer",
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskToDelete) => {
    // Usando .filter() para pegar todas as tasks do array "tasks", retornando todas aquelas que são diferentes da "taskToDelete"
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);

    // Atualiza o estado das tarefas com as tarefas atualizadas (sem a tarefa excluída)
    setTasks(updatedTasks);
  };

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    if (!inputValidation(inputText)) {
      setInputText("");
      return;
    }

    // Cria uma nova tarefa com o texto de entrada e status "A Fazer"
    const newTask = { input: inputText, status: "A Fazer" };
    // Atualiza o estado das tarefas adicionando a nova tarefa. A variável recebe um novo array, criado espalhando os elementos do array original e adicionando a "newTask" ao final
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    setInputText("");
  };

  return (
    <>
      <div className="container">
        <form id="form">
          <div className="new-task-container">
            <input
              type="text"
              className="new-task-input"
              placeholder="Adicione sua tarefa aqui."
              // "value" determina o valor atual da entrada, sendo controlada pela variável inputText
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className="new-task-button"
              type="button"
              onClick={handleAddTask}
            >
              Criar Tarefa
            </button>
          </div>
        </form>
        <div className="task-container">
          {/* Expressão JSX que mapeia as tarefas no estado "tasks" e cria elementos HTML dinaminamente */}
          {tasks.map((task, index) => (
            // Para cada tarefa cria-se uma nova div com uma key
            <div className="task-item" key={index}>
              <p
                // Aplica a clase "completed-task" caso o status seja "Concluído"
                className={`task-on ${
                  task.status === "Concluído" ? "completed-task" : ""
                }`}
                // A tarefa ao ser clickada chama a função passando o seu index
                onClick={() => handleClick(index)}
              >
                {task.input}
              </p>
              {/* Span usado para mostrar o status da tarefa */}
              <span
                className={`task-status ${
                  // A classe CSS "completed" será aplicada se o task.status for igual a "Concluído". Caso não seja, mantém sem a classe
                  task.status === "Concluído" ? "completed" : ""
                }`}
              >
                {task.status}
              </span>
              <i
                // tag <i> que exibe o ícone de lixeira e chama função quando é clicada
                className="fa-solid fa-trash"
                onClick={() => handleDeleteTask(task)}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToDoList;
