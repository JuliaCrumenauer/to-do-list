import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';


import './global.css';



export function App() {
  return (
    <div className={styles.wrapper}>
      <Header /> 

      <Task />
  
    </div>


    
  )
}

export default App

