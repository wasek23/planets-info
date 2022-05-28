import { Platform, StatusBar, SafeAreaView, StyleSheet } from 'react-native';

const SafeArea = ({ preset = 'default', style, children }) => {
	const safeAreaStyles = StyleSheet.compose({
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight || 25 : 0
	}, style);

	return <SafeAreaView style={safeAreaStyles}>{children}</SafeAreaView>
}
export default SafeArea;