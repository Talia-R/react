import { TimerIcon } from "lucide-react";
import style from "./styles.module.css";

export function Logo(){
    return (
        <div className={style['logo-container']}>
            <TimerIcon/>
            <h1>Chronos</h1>
        </div>
    )
}