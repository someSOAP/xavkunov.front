import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import photo from './assets/photo.jpeg'
import dream from './assets/dream.jpeg'

const App: FC = () => {
    const { t } = useTranslation()

    return (
        <main>
            <h1>{t('welcome')}</h1>
            <figure>
                <img src={photo} alt="photo of me" />
                <figcaption>{t('me')}</figcaption>
            </figure>
            <figure>
                <img src={dream} alt="photo of my dream" />
                <figcaption>{t('dream')}</figcaption>
            </figure>
        </main>
    )
}

export default App
