import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Header: FC = () => {
    const { t } = useTranslation()

    return (
        <header>
            <h1>{t('welcome')}</h1>
        </header>
    )
}

export default Header
