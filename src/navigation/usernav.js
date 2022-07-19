import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserList from "../screens/UserList";
import UserUpdate from "../screens/UserUpdate";


const Stack = createStackNavigator();

const UserNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserUpdate" component={UserUpdate} />
        
    </Stack.Navigator>
);


export default UserNavigator;