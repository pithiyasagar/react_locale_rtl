import React, {useEffect, useState} from 'react';
import {I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';

import RNRestart from 'react-native-restart';
import HomeComponent from './HomeComponent';

const HomeContainer = () => {
  const {t, i18n} = useTranslation();

  const [isArabic, setIsArabic] = useState(true);

  const updateLanguage = (value: boolean) => {
    setIsArabic(value);
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  };

  return <HomeComponent isArabic={isArabic} setIsArabic={updateLanguage} />;
};

export default HomeContainer;
