import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {

    const pages = [
        { label: 'Home', url: '/'},
        { label: 'Watch', url: '/watch'},
        { label: 'Testimony', url: '/testimony'},
        { label: 'Contact', url: '/contact'}
    ]

    return (
        <header className={ styles.header }>
            <span className={ styles.logoWrap }>
                <Image
                    src='/imgs/wci_bolton_logo.png'
                    alt='Living Faith Church logo'
                    layout='fill'
                    objectFit='contain'
                />
            </span>
            <nav>
                {
                    pages.map((page) => (
                        <Link href={ page.url }>
                            { page.label }
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}