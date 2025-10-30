import { Heart, Apple } from "lucide-react"
import styles from "./styles.module.css"

export function Footer(){
    return(
        <footer className={styles.footer}>
            <a href="">Entenda a técnica pomodoro <Apple/></a>
            <a href="">Chronos Pomodoro ® 2025 - feito com <Heart/></a>
        </footer>
    )
}