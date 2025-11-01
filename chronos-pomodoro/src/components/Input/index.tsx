import styles from "./styles.module.css"

type InputProps = {
    labelText: string;
    id : string;
    placeholder: string;
} & React.ComponentProps<'input'>

export function Input({ labelText , id, type, placeholder, ...rest } : InputProps){

    return(
        <div className={styles['input-container']}>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type={type} placeholder={placeholder} {...rest}/>
        </div>
    )
}