import { useState } from "react";
import { InvalidEvent } from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";

import styles from "./NovaTarefa.module.css";
import addTarefa from "../assets/addTarefa.svg";


interface NovaTarefa { onCreate: (TextoTarefa: string) => void; }

export function CriarTarefa({ onCreate }: NovaTarefa) {
  const [CriarTarefa, setCriarTarefa] = useState("");

  function handleCriarNovaTarefa(event: FormEvent) {
    event.preventDefault();
    onCreate(CriarTarefa);
    setCriarTarefa("");
  }

  function handleNovaTarefaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setCriarTarefa(event.target.value);
  }

  function handleNovaTarefaInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Oxe 🤨, tem que digitar a tarefa");
  }

  return (
    <div>
      <form onSubmit={handleCriarNovaTarefa} className={styles.textArea}>
        <textarea
          name="NovaTarefa"
          placeholder="Boraaa criar uma tarefa"
          value={CriarTarefa}
          onChange={handleNovaTarefaChange}
          onInvalid={handleNovaTarefaInvalid}
          required
        />

        <button type="submit">
          Criar <img src={addTarefa} />
        </button>
      </form>
    </div>
  );
}