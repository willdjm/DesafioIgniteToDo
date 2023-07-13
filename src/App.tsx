import styles from "./App.module.css";

import { CorpoTarefas } from "./components/ListaTarefas";
import { Header } from "./components/Header";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <CorpoTarefas />
      </div>
    </div>
  );
}

export default App;
