import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  I18nManager,
  FlatList,
  Switch,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import RNRestart from 'react-native-restart'

import {color} from '../color';

const data = [
  {
    id: 'DP78890',
    image_url:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'shipping',
    items: 2,
  },
  {
    id: 'DP78891',
    image_url:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'delivered',
    items: 2,
  },
  {
    id: 'DP78892',
    image_url:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'shipping',
    items: 2,
  },
];

const Home = () => {
  const {t, i18n} = useTranslation();

  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      // RNRestart.Restart();
    });
  }, [isArabic]);

  const renderItems = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.idTitleText}>{item.id}</Text>

        <Image source={{uri: item.image_url}} style={styles.imageItem} />

        <View style={styles.dashedDividerView} />

        <View style={styles.orderStatusContainer}>
          <Text style={styles.orderStatusTitleText}>{t('order_status')}</Text>
          <Text style={styles.orderStatusValueText}>{t(item.status)}</Text>
        </View>

        <View style={styles.orderStatusContainer}>
          <Text style={styles.orderStatusTitleText}>{t('items')}</Text>
          <Text style={styles.orderStatusValueText}>
            {t('var_items_purchased', {items: item.items})}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.languageContainer}>
        <Text>{t('change_language')}</Text>
        <Switch value={isArabic} onValueChange={setIsArabic} />
      </View>

      <FlatList data={data} renderItem={renderItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: color.white,
    flex: 1,
  },

  languageContainer: {
    margin: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  itemContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: color.white,
    padding: 10,
    borderRadius: 5,

    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  idTitleText: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
    fontWeight: 700,

    color: color.black,
  },

  imageItem: {
    width: 100,
    height: 100,

    borderRadius: 5,

    marginVertical: 5,
    backgroundColor: color.grey_light
  },

  dashedDividerView: {
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    borderStyle: 'dashed',
    borderColor: color.grey_light,
  },

  orderStatusContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  orderStatusTitleText: {
    fontSize: 15,
    textAlign: 'left',

    color: color.grey,
  },
  orderStatusValueText: {
    fontSize: 15,
    textAlign: 'left',

    color: color.black,
  },
});

export default Home;
