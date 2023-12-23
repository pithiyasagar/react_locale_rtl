/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import './src/localization/i18n';
import HomeContainer from './src/screens/home/HomeContainer';

AppRegistry.registerComponent(appName, () => HomeContainer);
