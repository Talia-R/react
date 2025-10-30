import { History, HomeIcon, Settings, Sun } from "lucide-react";
import style from './styles.module.css'

export function IconsSection(){
    return(
        <div className={style['icones-container']}>
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
        </div>
    )
}