# Lista de Tarefas (To-Do List) em React para o Trabalho 1 do Lab de C214

Este é um aplicativo simples de lista de tarefas (To-Do List) construído em React. Ele permite adicionar, marcar como concluídas e excluir tarefas da lista.

Integrantes:

- Douglas Brandão de Souza. Matrícula 1730. GEC
- Eduardo Costa Resende. Matrícula 200. GES

## Como Funciona

A aplicação possui três principais recursos:

1. **Adicionar Tarefa**: Você pode adicionar uma nova tarefa inserindo a descrição no campo de entrada e clicando no botão "Criar Tarefa".

2. **Marcar como Concluída**: Clique em uma tarefa na lista para alternar seu status entre "A Fazer" e "Feito". O texto da tarefa mudará de cor para indicar o status.

3. **Excluir Tarefa**: Você pode excluir uma tarefa clicando no ícone de lixeira ao lado dela.

## Pré-requisitos

Antes de executar o aplicativo, verifique se você possui o [Node.js](https://nodejs.org/) instalado.

## Como Executar

Para executar o projeto, siga estas etapas:

1. Navegue até o diretório `ToDoListVite` usando o terminal:

```bash
cd ToDoListVite
```

2. Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
```

4. O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Personalização

Você pode personalizar o aplicativo de acordo com suas preferências:

- **Cores**: No arquivo `app.css`, você pode ajustar as cores de fundo, texto e outras propriedades CSS para personalizar a aparência da aplicação.

- **Fontes**: O aplicativo usa a fonte "Raleway" do Google Fonts. Você pode alterar a fonte editando o arquivo HTML (`index.html`) e o arquivo CSS (`app.css`).

- **Estilos de Texto**: Você pode personalizar o estilo do texto para as tarefas "To do" e "Completed" no arquivo `app.css`.
