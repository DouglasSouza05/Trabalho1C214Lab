///<reference types='cypress'/>

describe('Cenario de Teste: Testar funcionalidades do site de tarefas', () => {
  it('Caso de teste: Adicionar tarefa', () => {
    accessSite();
    var add_task = createTask();
    addTask(add_task);
    cy.get('.task-on').should('have.text', add_task);
    cy.wait(1000);
  })

  it('Caso de test: Deletar tarefa', () => {
    accessSite();
    var task_delete = createTask();
    addTask(task_delete);
    cy.get('.fa-solid').click();
    cy.get('.task-container').should('not.contain', task_delete);
    cy.wait(1000);
  })

  it('Caso de teste: Adicionar mais de uma tarefa', () => {
    accessSite();
    var tasks = addTasks();
    cy.get(':nth-child(1) > .task-on').should('have.text', tasks[0]);
    cy.get(':nth-child(2) > .task-on').should('have.text', tasks[1]);
    cy.get(':nth-child(3) > .task-on').should('have.text', tasks[2]);
    cy.get(':nth-child(4) > .task-on').should('have.text', tasks[3]);
    cy.get(':nth-child(5) > .task-on').should('have.text', tasks[4]);
    cy.wait(1000);
  })

  it('Caso de teste: Marcar a tarefa como feita', () => {
    accessSite();
    var task = createTask();
    addTask(task);
    cy.wait(1000);
    cy.get('.task-on').click();
    cy.wait(500);
    cy.get('.task-status').should('have.text', 'Concluído');
    cy.wait(1000);
  })

  it('Caso de teste: Verificar se a tarefa foi criada como "A Fazer" primeiro', () => {
    accessSite();
    var task = createTask();
    addTask(task);
    cy.wait(1000);
    cy.get('.task-status').should('have.text', 'A Fazer');
  })

})

function accessSite() {
  cy.visit('http://localhost:5173');
  cy.wait(500);
}

function addTask(task) {
  cy.get('.new-task-input').click().type(task);
  cy.wait(500);
  cy.get('.new-task-button').click().click();
}

function createTask() {
  let hour = new Date().getHours().toString();
  let minutes = new Date().getMinutes().toString();
  let seconds = new Date().getSeconds().toString();
  let task = hour + minutes + seconds + "_tarefa"
  return task;
}

function addTasks() {
  var task_time = [];
  for (let i = 0; i < 5; i++) {
    var time = setInterval(createTask, 1000);
    task_time.push(time + "_tarefa");
    addTask(task_time[i]);
    cy.wait(1000);
  }
  clearInterval(time);
  return task_time;
}