import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import RootStackScreen from "./navigations/RootStackScreen";
import ProfileStackScreen from './navigations/ProfileStackScreen'
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './component/context';

const App = () => {
	const [isLoading, setIsloading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(null);

	const authContext = React.useMemo(() => ({
		signIn: () => { 
			setUserToken('signin'), setIsloading(false)
		},
		signUp: () => { 
			setUserToken('signup'), setIsloading(false)
		},
		signOut: () => { 
			setUserToken(null), setIsloading(false) 
		},
	}), []);

	useEffect(() => {
		setTimeout(() => {
			setIsloading(false)
		}, 1000);
	}, [])

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" color="#040440" />
			</View>
		)
	} else {
		return (
			<AuthContext.Provider value={authContext}>
				<NavigationContainer>
					{userToken == null ? <RootStackScreen /> : <ProfileStackScreen />}
				</NavigationContainer>
			</AuthContext.Provider>
		)
	}
}
export default App;