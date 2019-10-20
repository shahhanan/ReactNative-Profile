import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import IntroScreen from "../screens/IntroScreen";

export default createStackNavigator({
    IntroScreen: IntroScreen,
    Home: HomeScreen,
    LinksScreen: LinksScreen,
    SettingsScreen: SettingsScreen
  });
 
