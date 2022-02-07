import ToDoListClass from "./src/pages/LearnClassBased"
import ToDoListFunction from "./src/pages/LearnFunctionBased"

const App = () => {
  return (
    <>
      <h3>Click to mark items as done.</h3>
      <ToDoListClass title='Class Based To Do List'/>
      <ToDoListFunction title='Functional To Do List'/>
    </>
  )
}

export default App;
