import { Component } from "react";
// import LearnClassBased from './src/pages/LearnClassBased'
import ToDoListClass from "./src/pages/LearnClassBased"
import ToDoListFunction from "./src/pages/LearnFunctionBased"

const App = () => {
  return (
    <>
      <h3>Click to mark items as done.</h3>
      <ToDoListClass/>
      <ToDoListFunction/>
    </>
  )
}

export default App;
