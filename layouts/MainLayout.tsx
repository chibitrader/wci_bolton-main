import { FC } from 'react'
import styles from './MainLayout.module.scss'

interface props {
    title: string
    children: JSX.Element | JSX.Element[]
}

export const MainLayout: FC<props> = ({ title, children }) => {

    return (
        <div className={ styles.page }>
            <h1 className={`bar ${ styles.title }`}>{ title }</h1>
            <div className={ styles.main }>
                { children }
            </div>
        </div>
    )
}