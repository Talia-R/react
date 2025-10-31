import {  HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from './styles.module.css'
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ){
        event.preventDefault();
        console.log("clicou")

        setTheme(prevTheme =>prevTheme === 'dark' ? 'light' : 'dark')
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    })

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
                <SunIcon/>
            </a>

        </nav>
    )
}
