 import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    
    if(toDo === "") {
      return;
    }
    
    setToDo("");
    setToDos((currnetArray) => [toDo, ...currnetArray]);
    // toDos.push(toDo);
  };
  
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        { toDos.map((element, index) => <li key={index}>{element}</li>) }
      </ul>
    </div>
  );
}

export default App;
