import React, { FC } from 'react'

import LangSwitcher from '@/components/LangSwitcher'

import instagram from '@/assets/instagram.png'
import hh from '@/assets/hh.png'
import telegram from '@/assets/telegram.png'
import github from '@/assets/github.png'

import styles from './SocialBar.module.scss'

interface ISocialBarItemProps {
    href: string
    img: string
    alt: string
}

const SocialBarItem: FC<ISocialBarItemProps> = ({ img, alt, href }) => {
    return (
        <li>
            <a href={href} target="_blank" rel="noreferrer">
                <img src={img} alt={alt} />
            </a>
        </li>
    )
}

const SocialBar: FC = () => {
    return (
        <ul className={styles.socialBar}>
            <SocialBarItem
                img={telegram}
                alt="telegram"
                href="https://t.me/someSOAP"
            />
            <SocialBarItem
                img={github}
                alt="github"
                href="https://github.com/someSOAP"
            />
            <SocialBarItem
                img={hh}
                alt="headhunter"
                href="https://hh.ru/resume/afd13acbff02a623d40039ed1f31437758526b"
            />
            <SocialBarItem
                img={instagram}
                alt="instagram"
                href="https://www.instagram.com/xavkunow/"
            />
            <li>
                <LangSwitcher />
            </li>
        </ul>
    )
}

export default SocialBar
