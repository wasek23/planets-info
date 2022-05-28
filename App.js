import { StatusBar, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Antonio_500Medium } from '@expo-google-fonts/antonio';

import Home from './src/screens/Home/Home';
import Details from './src/screens/Details/Details';
import Text from './src/components/Text/Text';

const Stack = createNativeStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		Antonio_500Medium,
		'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
		'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
	});

	if (!loaded) {
		<View>
			<Text>Fonts Loading...</Text>
		</View>
	}

	return <>
		<StatusBar style='light' />
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Details' component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	</>;
}