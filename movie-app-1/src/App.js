 import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);

  return (
    <div>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write..." />
      </form>
    </div>
  );
}

export default App;
