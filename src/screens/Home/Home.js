import { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, TextInput, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import PLANET_LIST from '../../components/data/planet-list';
import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

const Home = ({ navigation }) => {
	const [planetList, setPlanetList] = useState(PLANET_LIST);

	const filterPlanet = text => {
		const filteredPlanet = PLANET_LIST.filter(planet => planet.name?.toLowerCase().indexOf(text) > -1);
		setPlanetList(filteredPlanet)
	}

	const renderItem = ({ item }) => <Pressable style={styles.item} onPress={() => navigation.navigate('Details', { planet: item })}>
		<View style={{ ...styles.itemCircle, backgroundColor: item.color }} />
		<Text preset='h4' style={styles.itemName}>{item.name}</Text>

		<Entypo name='chevron-right' size={18} color={colors.white} />
	</Pressable>;

	return <SafeAreaView style={styles.container}>
		<Header />

		<TextInput placeholder='Type the planet name' placeholderTextColor={colors.white} autoCorrect={false} style={styles.searchInput} onChangeText={text => filterPlanet(text)} />

		<FlatList
			contentContainerStyle={styles.list}
			data={planetList}
			keyExtractor={item => item.name}
			renderItem={renderItem}
			ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} />
	</SafeAreaView>
}
export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black
	},
	list: {
		padding: spacing[4]
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: spacing[4]
	},
	itemName: {
		textTransform: 'uppercase',
		marginLeft: spacing[4],
		marginRight: 'auto'
	},
	itemCircle: {
		width: 30,
		height: 30,
		borderRadius: 15
	},
	itemSeparator: {
		borderBottomWidth: .5,
		borderBottomColor: colors.gray
	},
	searchInput: {
		color: colors.white,
		padding: spacing[4],
		borderBottomWidth: 1,
		borderBottomColor: colors.white,
		margin: spacing[5]
	}
});