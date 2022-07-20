import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserNavigator from './usernav';
import HomeScreen from '../screens/home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screen_options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
            case 'Home':
                iconName = 'ios-information-circle';
                break;
            case 'Settings':
                iconName = 'settings';
                break;
            case 'Users':
                iconName = 'barcode';
                break;
            default:
                iconName = 'th-list';
                break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'green',
    tabBarInactiveTintColor: 'gray',
});

const Tab = createBottomTabNavigator();



function ViewBottomTabs() {
    return (
        <Tab.Navigator screenOptions={screen_options}>
            <Tab.Screen name="Users" component={UserNavigator} />
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default ViewBottomTabs;