import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import ava from '@/assets/ava.png'

import SocialBar from '../SocialBar'

import styles from './Main.module.scss'

const Main: FC = () => {
    const { t } = useTranslation()

    return (
        <main>
            <SocialBar />
            <figure>
                <img className={styles.ava} src={ava} alt="photo of me" />
                <figcaption>{t('me')}</figcaption>
            </figure>
            {/*<figure>*/}
            {/*    <img src={dream} alt="photo of my dream" />*/}
            {/*    <figcaption>{t('dream')}</figcaption>*/}
            {/*</figure>*/}
        </main>
    )
}

export default memo(Main)
