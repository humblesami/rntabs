import React from 'react';
import { View, Text } from 'react-native';

function HomeScreen({navigation}) {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Loaded home page');
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}
export default HomeScreen;