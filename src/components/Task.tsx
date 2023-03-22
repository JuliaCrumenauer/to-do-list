import { AddressBook, PlusCircle, TestTube, ThumbsUp, Trash } from 'phosphor-react';
import Clipboard from '../assets/Clipboard.svg';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, ChangeEvent, useState } from 'react';
import styles from './Task.module.css';
import { DeleteAndCheck } from './DeleteAndCheck';



export interface TaskProps {
    id: string;
    title: string;
    isCompleted: boolean;
    taskConcluded: (id: string, checked: boolean) => void;
    onDeleteTask: (id: string) => void;
}  

    export function Task() {
        
        const [tasks, setTasks] = useState<TaskProps[]>([]);
        const [newTaskText, setNewTaskText] = useState('');

        const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([])

        console.log(tasks.length)

        const numberOfCompleted = tasks.filter(task => task.isCompleted === true).length
        console.log(numberOfCompleted)

        const taskCountDone = tasks.reduce((completed, task) => {
          return completed + Number(task.isCompleted)
        }, 0)


    function onDeleteTask(taskToDeleteId: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
              return task.id != taskToDeleteId;
            })
              setTasks(tasksWithoutDeletedOne);
        } 

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
            setTasks(state => [...state, { 
                title: newTaskText,
                isCompleted: false,
                id: uuidv4(),
            }])
            setNewTaskText('');
          }

            const handleNewTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
                setNewTaskText(event.target.value);
              };

    function concludedTask(id: string, isCompleted: boolean) {
        tasks.map((tasks) => {
              if (tasks.id === id && isCompleted === false) {
                  tasks.isCompleted = true;
              } else if (tasks.id === id && isCompleted === true) {
                  tasks.isCompleted = false;
              }
                  return tasks;
                });
                setTasks(tasks)
                setCompletedTasks(tasks.filter(task => {
                  return task.isCompleted == true
                }))
              }

        return(

            <header className={styles.header}>
                <form onSubmit={handleSubmit}className={styles.taskForm}>
                    <textarea
                        placeholder="Adicione uma nova tarefa"
                        value={newTaskText}
                        onChange={handleNewTaskChange}
                        required
                    />

                    <button onClick={handleSubmit} type="submit">
                        Criar
                        <PlusCircle className={styles.iconeButton} />
                    </button>
                    <br/><br/>
                </form>
                
          <div className={styles.textWithoutTask}> 
              <div className={styles.linhaContadores}>
                <p className={styles.tarefasCriadas}>Tarefas Criadas: <span>{tasks.length}</span></p>
                <p className={styles.tarefasConcluidas}>Concluídas: 
                <span>{completedTasks.length} de {tasks?.length}</span> </p>
              </div>

            <section className={tasks.length > 0 ? styles.clipboardTrueTask : styles.clipboard}>    
              <img src={Clipboard} />
              <strong className={styles.clipboardStrong01}>
                Você ainda não tem tarefas cadastradas
              </strong>

              <strong className={styles.clipboardStrong02}>
                Crie tarefas e organize seus itens a fazer
              </strong>
            </section>

              <div className={styles.taskList}>

                  {tasks.map(task => {
                  return (        

                    <DeleteAndCheck  
                      id= {task.id}
                      key={task.id}
                      title={task.title}
                      isCompleted={task.isCompleted}
                      onDeleteTask={onDeleteTask}
                      taskConcluded = {concludedTask}                   
                    />
                  )
                })}

              </div>
          </div>

          </header>
          
    );
}