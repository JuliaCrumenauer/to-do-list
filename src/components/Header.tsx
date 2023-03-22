import styles from './Header.module.css'

import toDoListLogo from '../assets/todolistlogo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <img src={toDoListLogo} alt="Logotipo do toDoList"/>
            </div>
        </header>
    );
}