import React from 'react';
import {View, Text, FlatList, Switch} from 'react-native';
import {useTranslation} from 'react-i18next';

import styles from './styles';
import {data} from '../../const/const';
import {HomeProps} from './HomeProps';
import HomeItem from '../HomeItem';
import {History} from './History';

const HomeComponent = (props: HomeProps) => {
  const {isArabic, setIsArabic} = props;

  const {t} = useTranslation();

  const renderItems = ({item}) => {
    return <HomeItem item={item} />;
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.languageContainer}>
        <Text>{t('change_language')}</Text>
        <Switch value={isArabic} onValueChange={setIsArabic} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeComponent;
