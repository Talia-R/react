import styles from "./styles.module.css"

export function Cycle(){
    return (
        <section className={styles.cycle}>
            <span>Ciclos:</span>
            <ul className={styles['cycle-list']} aria-label="Lista de ciclos">
                <li className={`${styles['cycle-item']} ${styles.workTime}`}></li>
                <li className={`${styles['cycle-item']} ${styles.shortBreakTime}`}></li>
                <li className={`${styles['cycle-item']} ${styles.workTime}`}></li>
                <li className={`${styles['cycle-item']} ${styles.shortBreakTime}`}></li>
                <li className={`${styles['cycle-item']} ${styles.workTime}`}></li>
                <li className={`${styles['cycle-item']} ${styles.shortBreakTime}`}></li>
                <li className={`${styles['cycle-item']} ${styles.longBreakTime}`}></li>
            </ul>
        </section>
    )
}