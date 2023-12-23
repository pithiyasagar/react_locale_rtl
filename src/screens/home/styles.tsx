import {StyleSheet} from 'react-native';

import {color} from '../../const/color';

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
    backgroundColor: color.grey_light,
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

export default styles;
