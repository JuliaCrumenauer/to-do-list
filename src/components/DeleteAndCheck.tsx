import styles from './DeleteAndCheck.module.css';

import { Trash } from 'phosphor-react';
import { TaskProps } from './Task';
import { useState } from 'react';

interface TaskComponentProps extends TaskProps {
  onDeleteTask: (taskToDeleteId: string) => void;
}

export function DeleteAndCheck({ title, id, onDeleteTask, isCompleted, taskConcluded}:TaskComponentProps) {
  const [check, setCheck] = useState<boolean>(isCompleted);

    function handleDelete() {
      onDeleteTask(id);
    }

    function concludedTaskCheck() {
      if (check == true) {
        setCheck(false)
        taskConcluded(id, check);
      } else {
        setCheck(true)
        taskConcluded(id, check);
      }
    }

  return (
    
      <div className={styles.taskList}>
          <div>
            <label className={styles.checkContainer}>
              <input 
                type="checkbox" 
                onClick={concludedTaskCheck}
              />
              <span className={styles.checkbox}></span>
            </label>
          </div>

          <div className={styles.taskText}> 
          <strong className={check == true ? styles.strongCheck : styles.strong}>
            {title}
          </strong>
          </div>

          <div className={styles.trash} onClick={handleDelete}>
          <button onClick={handleDelete} title="Deletar tarefa" className={styles.buttonDelete}>
            <div className={styles.trash}>
            <Trash size={24} />
            </div>
          </button>
          </div>
      </div>
  )
}   