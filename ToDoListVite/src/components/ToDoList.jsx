import { useState } from "react";

function ToDoList() {
  // Definindo estados iniciais para as tarefas e o texto de entrada
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  // Função para validar se o texto de entrada não está em branco
  const inputValidation = (input) => {
    return input.trim().length > 0;
  };

  // Função para lidar com o clique em uma tarefa, alternando entre "A Fazer" e "Feito"
  const handleClick = (clickedIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === clickedIndex) {
        return {
          ...task,
          status: task.status === "A Fazer" ? "Concluído" : "A Fazer",
        };
      }
      return task;
    });

    // Atualiza o estado das tarefas com as tarefas atualizadas
    setTasks(updatedTasks);
  };

  // Função para lidar com a exclusão de uma tarefa
  const handleDeleteTask = (taskToDelete) => {
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
    const newTask = { description: inputText, status: "A Fazer" };
    // Atualiza o estado das tarefas adicionando a nova tarefa
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    // Limpa o campo de entrada
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
              required
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
          {tasks.map((task, index) => (
            <div className="task-item" key={index}>
              <p
                className={`task-on ${
                  task.status === "Concluído" ? "completed-task" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {task.description}
              </p>
              {/* <span className="task-status">{task.status}</span> */}
              <span
                className={`task-status ${
                  task.status === "Concluído" ? "completed" : ""
                }`}
              >
                {task.status}
              </span>
              <i
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
