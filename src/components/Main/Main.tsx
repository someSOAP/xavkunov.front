import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import ava from '@/assets/ava.png'

import styles from './Main.module.scss'

const Main: FC = () => {
    const { t } = useTranslation()

    return (
        <main>
            <figure>
                <div className={styles.avaWrapper}>
                    <img className={styles.ava} src={ava} alt="photo of me" />
                </div>
                <figcaption>{t('me')}</figcaption>
            </figure>
        </main>
    )
}

export default memo(Main)
