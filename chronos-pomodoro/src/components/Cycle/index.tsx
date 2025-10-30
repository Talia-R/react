import styles from "./styles.module.css"

export function Cycle(){
    return (
        <section className={styles.cycle}>
            <span>Ciclos:</span>
            <ul className={styles['cycle-list']} aria-label="Lista de ciclos">
                <li> 0 </li>
                <li> 0 </li>
                <li> 0 </li>
                <li> 0 </li>
                <li> 0 </li>
                <li> 0 </li>
                <li> 0 </li>
                <li> 0 </li>
            </ul>
        </section>
    )
}