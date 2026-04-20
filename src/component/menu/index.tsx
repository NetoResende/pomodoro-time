import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type IsTypeTheme = "dark" | "light" 

export function Menu(){
    const [theme, setTheme ] = useState <IsTypeTheme>("dark")

    function hendlerTheme (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()
        setTheme( state => {
            const nextTheme = state === "dark" ? "light" : "dark"
            return nextTheme;
        })
    }
    useEffect(()=>{
        document.documentElement.setAttribute('dataTheme', theme)
    }, [theme])
    
    return (
        <nav>
            <h1 className={`${styles.menu} ${styles.texto}`}>
                <a href="##" 
                    className={styles.menuLink}
                     area-label="Ir para a Home" 
                     title='Ir para a Home'
                >
                    <HouseIcon/>
                </a>
                <a href="##" 
                    className={styles.menuLink}
                     area-label="Ver Histórico" 
                     title='Ver Histórico'
                >
                    <HistoryIcon/>
                </a>
                <a href="##" 
                    className={styles.menuLink}
                      area-label="Configurações" 
                      title='Configurações'
                >
                    <SettingsIcon/>
                </a>
                <a href="##" 
                    className={styles.menuLink}
                     area-label="Mudar Tema" 
                     title='Mudar Tema' 
                     onClick={hendlerTheme}
                >
                    {<SunIcon/>}
                </a>
            </h1>
        </nav>
    )
}