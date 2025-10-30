import styles from "./styles.module.css"

type InputProps = {
    description: string;
    id : string;
} & React.ComponentProps<'input'>

export function Input({ description , id, type } : InputProps){

    return(
        <div className={styles['input-container']}>
            <label htmlFor={id}>{description}</label>
            <input id={id} type={type}/>
        </div>
    )
}