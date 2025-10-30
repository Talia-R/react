import styles from "./styles.module.css"

type FormProps = {
    children: React.ReactNode;
}

export function Form({ children } : FormProps){

    return(
        <form action="" className={styles.form}>
            <label htmlFor="text">{children}</label>
            <input type="text"/>
        </form>
    )
}