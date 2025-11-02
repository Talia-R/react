import type React from "react"
import styles from "./styles.module.css"

type MainButtonProps = {
    icon : React.ReactNode
    color?: "green" | "red"
} & React.ComponentProps<'button'>

export function MainButton( {icon, color = "green", ...props} : MainButtonProps){
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    )
}