import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ViewBottomTabs from './src/navigation/bottomtabs';


export default function App() {
    return (
        <NavigationContainer>
            <ViewBottomTabs />
        </NavigationContainer>
    );
}
