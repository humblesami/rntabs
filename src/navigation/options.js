import Ionicons from 'react-native-vector-icons/Ionicons';

const screen_options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch(route.name){
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

export default screen_options;