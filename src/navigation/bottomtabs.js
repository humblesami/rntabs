import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/settings';
import screen_options from './options';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function ViewBottomTabs() {
    return (
        <Tab.Navigator screenOptions={screen_options}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default ViewBottomTabs;