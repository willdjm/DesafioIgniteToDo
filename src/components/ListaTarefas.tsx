import { useState } from "react";
import { Tarefa } from "./Tarefa";
import { CriarTarefa } from "./NovaTarefa";

import tarefaSvg from "../assets/tarefa.svg";
import styles from "./ListaTarefas.module.css";

interface SituacaoProps {
  id: string;
  statusChange: boolean;
}

interface TarefasProps {
  id: string;
  content: string;
  check: boolean;
}

export function CorpoTarefas() {
  const [tarefas, setTarefas] = useState<TarefasProps[]>([]);

  function criarNovaTarefa(criarNova: string) {
    setTarefas([
      ...tarefas,
      { id: String(tarefas.length + 1), content: criarNova, check: false },
    ]);
  }

  function deletarTarefa(TarefaDeletar: string) {
    const tarefaWithoutDelete = tarefas.filter((item) => {
      return item.id !== TarefaDeletar;
    });
    setTarefas(tarefaWithoutDelete);
  }

  function changeStatusTarefa({ id, statusChange }: SituacaoProps) {
    const tarefasWithStatusChange = [...tarefas];
    const findIndex = tarefas.findIndex((item) => item.id === id);
    tarefasWithStatusChange[findIndex].check = statusChange;
    setTarefas(tarefasWithStatusChange);
  }

  const tarefaFeita = tarefas.filter((item) => item.check === true);

  return (
    <div>
      <CriarTarefa onCreate={criarNovaTarefa} />
      <div className={styles.ListaTarefas}>
        <strong>
        Suas Tarefas 📋<b>{tarefas.length}</b>
        </strong>
        <strong>
          Tarefas Finalizadas ✔ {" "}
          {tarefas.length === 0 ? (
            <b>0</b>):(
            <b>{tarefaFeita.length} de {tarefas.length}</b>
          )}
        </strong>
      </div>
      <ul className={styles.tarefas}>
        {tarefas.length === 0 ? (
          <div className={styles.ListaTarefasVazia}>
            <img src={tarefaSvg} />
            <strong>Eiii, você ainda não tem nenhuma tarefa <span>😕</span></strong>
            <p>Vamos criar uma tarefa e organizar seus itens <span>💪</span></p>
          </div>):
          (tarefas.map((tarefa) => {
            return (
              <li key={tarefa.id}>
                <Tarefa
                  id={tarefa.id}
                  tarefa={tarefa.content}
                  onDeleteTarefa={deletarTarefa}
                  onChangeStatus={changeStatusTarefa}
                />
              </li>
        );}))}
      </ul>
    </div>
  );
}
