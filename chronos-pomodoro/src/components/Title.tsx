import { TimerIcon } from "lucide-react";
import style from "./Title.module.css";

export function Title(){
    return (
        <div className={style['title-container']}>
            <TimerIcon size={52}/>
            <h1>Chronos</h1>
        </div>
    )
}