import Ionicons from 'react-native-vector-icons/Ionicons';

const screen_options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        // console.log(route, route.name);
        if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'green',
    tabBarInactiveTintColor: 'gray',
});

export default screen_options;