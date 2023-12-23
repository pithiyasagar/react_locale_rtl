import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';

import styles from './home/styles';
import {History} from './home/History';
import getFormattedDate from '../utils/helper';

const HomeItem = ({history}: {history: History}) => {
  const {t} = useTranslation();

  const {id, image_url, status, items, timestamp, amount, description} =
    history;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.orderStatusContainer}>
        <Text style={styles.idTitleText}>{id}</Text>
        <Text style={styles.orderStatusValueText}>{'$' + amount}</Text>
      </View>

      <FastImage
        source={{uri: image_url}}
        style={styles.imageItem}
        fallback={true}
      />

      <Text style={styles.orderStatusTitleText}>
        {t('order_date_var', {date: getFormattedDate(timestamp)})}
      </Text>

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

      <Text style={styles.orderStatusTitleText}>{description}</Text>
    </View>
  );
};

export default HomeItem;
