import {  HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from './styles.module.css'
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(() => {
       const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark" ;
        return storageTheme;
    });

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })

    }
    const nextThemeIcon = {
        "dark": <SunIcon/>,
        "light": <MoonIcon/>
    }

    useEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme)
    }),[theme]

    return(
        <nav className={styles['menu-container']}>
            <a className={styles['menu-Link']} 
            href="#" 
            aria-label="Ir para home" 
            title="Home">
                <HomeIcon/>
            </a>

            <a className={styles['menu-Link']} 
            href="#" 
            aria-label="Ver histórico" 
            title="Histórico">
                <HistoryIcon/>
            </a>

            <a className={styles['menu-Link']} 
            href="#" 
            aria-label="Ir para página de configurações" 
            title="Configurações">
                <SettingsIcon/>
            </a>

            <a className={styles['menu-Link']} 
            href="#" 
            aria-label="Mudar o tema" 
            title="Tema" 
            onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>

        </nav>
    )
}
