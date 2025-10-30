import { History, HomeIcon, Settings, Sun } from "lucide-react";
import style from './styles.module.css'

export function Menu(){
    return(
        <nav className={style['icones-container']}>
            <div>
                <HomeIcon/>
            </div>
            <div>
                <History/>
            </div>
            <div>
                <Settings/>
            </div>
            <div>
                <Sun/>
            </div>
        </nav>
    )
}