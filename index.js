/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './Components/MainScreen'
import MyPage from './Components/MyPageScreen'
import App from './App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyPage);
