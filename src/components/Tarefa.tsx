import styles from "./Tarefa.module.css";
import { ChangeEvent } from "react";
import { Trash } from "phosphor-react";


interface StatusProps {
  id: string;
  statusChange: boolean;
}

interface TarefaProps {
  id: string;
  tarefa: string;
  onDeleteTarefa: (tarefaId: string) => void;
  onChangeStatus: ({ id, statusChange }: StatusProps) => void;
}

export function Tarefa ({ id, tarefa, onDeleteTarefa, onChangeStatus }: TarefaProps) {
  function handleDeleteTarefa() {
    onDeleteTarefa(id);
  }

  function TarefaStatus(event: ChangeEvent<HTMLInputElement>) {
    onChangeStatus({ id, statusChange: event.target.checked });
  }

  return (
    <div className={styles.tarefa}>
      <input id={id} type="checkbox" onChange={TarefaStatus} />
      <label htmlFor={id}>
        {tarefa}
        <button onClick={handleDeleteTarefa}>
          <Trash size={24} />
        </button>
      </label>
    </div>
  );
}
