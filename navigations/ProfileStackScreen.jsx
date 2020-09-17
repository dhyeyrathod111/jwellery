import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserProfile from "../screens/UserProfile";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator headerMode='none'>
        <ProfileStack.Screen name="UserProfile" component={UserProfile}/>
    </ProfileStack.Navigator>
);

export default ProfileStackScreen;