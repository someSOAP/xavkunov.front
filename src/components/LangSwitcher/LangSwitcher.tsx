import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ENG_LANG, RUS_LANG } from '@/constants'

import styles from './LangSwitcher.module.scss'

const LangSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const onClick = () => {
    const nextLang = i18n.language === RUS_LANG ? ENG_LANG : RUS_LANG
    i18n.changeLanguage(nextLang)
  }

  return (
    <button className={styles.langSwitcher} onClick={onClick}>
      {i18n.language === RUS_LANG ? '🇺🇸' : '🇷🇺'}
    </button>
  )
}

export default LangSwitcher
