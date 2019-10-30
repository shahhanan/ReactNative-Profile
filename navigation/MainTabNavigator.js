import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import RewiewsScreen from '../screens/RewiewsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import IntroScreen from "../screens/IntroScreen";

export default createStackNavigator({
    IntroScreen: IntroScreen,
    Home: HomeScreen,
    RewiewsScreen: RewiewsScreen,
    SettingsScreen: SettingsScreen
  });
 
