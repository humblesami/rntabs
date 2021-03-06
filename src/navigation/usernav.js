import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserList from "../screens/user/UserList";
import UserUpdate from "../screens/user/UserUpdate";


const Stack = createStackNavigator();

const UserNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserUpdate" component={UserUpdate} />
    </Stack.Navigator>
);

export default UserNavigator;