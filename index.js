/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './src/screens/Home';
import './src/localization/i18n';

AppRegistry.registerComponent(appName, () => Home);
