import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import SocialBar from '@/components/SocialBar'

import styles from './Header.module.scss'

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{t('welcome')}</h1>
      <SocialBar />
    </header>
  )
}

export default memo(Header)
