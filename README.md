# Atividade: Lista de Tarefas com React e Material-UI  

## Introdução  
Material-UI (MUI) é uma biblioteca poderosa para criar interfaces modernas e responsivas em React.  
Nesta atividade, você usará MUI para criar uma aplicação simples de "Lista de Tarefas". Esse exercício permitirá que você pratique:  
- Criação de componentes React.  
- Uso de componentes do MUI.  
- Gerenciamento de estado com hooks (`useState`).  

Abaixo está um exemplo de um website com funcionalidades semelhantes: 

![Exemplo de Lista de Tarefas](./public/todo-app-dark-mode.png)  

Você também pode acessá-lo online clicando [aqui](https://dev-david-alves.github.io/A-Todo-App-with-reordering/).

## Atividade  
Seu objetivo é criar uma aplicação funcional e estilosa de "Lista de Tarefas".  

### Requisitos:  
1. **Adicione e Exiba Tarefas:**  
   - Utilize componentes do MUI, como `AppBar`, `Button`, `TextField`, e `Card`, para criar o layout.  
   - Crie um formulário para adicionar tarefas.  
   - Liste as tarefas em um componente estilizado (`Card` ou `Paper`).  

2. **Marque Tarefas como Concluídas:**  
   - Adicione funcionalidade para marcar tarefas como concluídas. Alterne a aparência de tarefas concluídas (ex.: riscar o texto ou alterar a cor).  

4. **Extra (opcional):**  
   - Use o `ThemeProvider` para possibilitar a mudança entre tema claro e escuro.  
   - Permitir a reordenação das tarefas na lista.
   - Adicione persistência com `localStorage` para salvar as tarefas mesmo após recarregar a página.  