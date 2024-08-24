import Button from "./Button";
import styles from "./App.module.css"
import UseStateAndEffect from "./UseStateAndEffect";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Boilerplate of Clear React Proj.</h1> 
      <Button text={"Hello World!"} />
      <UseStateAndEffect />
    </div>
  );
}

export default App;
