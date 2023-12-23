import {Image, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import styles from './home/styles';

const HomeItem = ({item}) => {
  const {t} = useTranslation();

  const {id, image_url, status, items} = item

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.idTitleText}>{id}</Text>

      <Image source={{uri: image_url}} style={styles.imageItem} />

      <View style={styles.dashedDividerView} />

      <View style={styles.orderStatusContainer}>
        <Text style={styles.orderStatusTitleText}>{t('order_status')}</Text>
        <Text style={styles.orderStatusValueText}>{t(status)}</Text>
      </View>

      <View style={styles.orderStatusContainer}>
        <Text style={styles.orderStatusTitleText}>{t('items')}</Text>
        <Text style={styles.orderStatusValueText}>
          {t('var_items_purchased', {items: items})}
        </Text>
      </View>
    </View>
  );
};

export default HomeItem;
