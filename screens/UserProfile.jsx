import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { AuthContext } from "../component/context";

export default UserProfile = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>User profile screen</Text>
            <TouchableOpacity>
                <Button
                    onPress={signOut}
                    title="Logout"
                    color="#040440"
                />
            </TouchableOpacity>
        </View>
    )
}
