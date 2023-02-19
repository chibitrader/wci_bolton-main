import { FC } from 'react'
import styles from './Pane.module.scss'
import Link from 'next/link'

interface props {
    closable?: boolean
    light?: boolean
    aspectRatio?: number
    children: JSX.Element | JSX.Element[]
    styleClass?: string
    onClick?: Function
    customStyle?: any
    link?: string
}

export const Pane: FC<props> = ({closable, light, aspectRatio, customStyle, onClick, children, link}) => {

    const click = () => {
        if (onClick) {
            onClick()
        }
    }

    const PaneBody = () => (
        <>
        {
            closable &&
            <div className={ styles.topWrap }>
                <button
                    className={ styles.closeBtn }
                >
                    X
                </button>
            </div>
        }
        { children }
        </>
    )


    const ReturnPane = () => {

        if (link) {
            return (
                <Link
                    href={ link }
                    className={`${styles.pane} ${ onClick || link ? styles.clickable : '' }`}
                    style={ customStyle }
                    onClick={ () => click()  }
                >
                    <PaneBody />
                </Link>
            )
        }
        else {
            return (
                <div
                    className={`${styles.pane} ${ onClick || link ? styles.clickable : '' }`}
                    style={ customStyle }
                    onClick={ () => click()  }
                >
                    <PaneBody />
                </div>
            )
        }
    }

    return (
        <ReturnPane />
    )
}