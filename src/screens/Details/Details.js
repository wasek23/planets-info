import { SafeAreaView, StyleSheet, ScrollView, View, Pressable, Linking } from 'react-native';

import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import { MercurySvg } from '../../svg';

const Details = ({ route }) => {
	const planet = route.params.planet;
	const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

	const renderImage = (name) => {
		switch (name) {
			case 'mercury':
				return <MercurySvg />;
			case 'venus':
				return null;
			case 'earth':
				return null;
			case 'mars':
				return null;
			case 'jupiter':
				return null;
			case 'saturn':
				return null;
			case 'uranus':
				return null;
			case 'neptune':
				return null;
			default:
				return null;
		}
	}

	return <SafeAreaView style={styles.container}>
		<Header backBtn={true} />

		<ScrollView>
			<View style={styles.imageView}>
				{renderImage(name)}
			</View>

			<View style={styles.detailsView}>
				<Text preset='h1' style={styles.name}>{name}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>

			<Pressable style={styles.source} onPress={() => Linking.openURL(wikiLink)}>
				<Text>Source:</Text>
				<Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
			</Pressable>

			<View style={styles.dataSection}>
				<PlanetData title='Rotation Time' value={rotationTime} />
				<PlanetData title='Revolution Time' value={revolutionTime} />
				<PlanetData title='Radius' value={radius} />
				<PlanetData title='Average Temperature' value={avgTemp} />
			</View>
		</ScrollView>
	</SafeAreaView>
}
export default Details;

const PlanetData = ({ title, value }) => {
	return <View style={styles.singleData}>
		<Text preset='small' style={{ textTransform: 'uppercase' }}>{title}</Text>
		<Text preset='h2'>{value}</Text>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black
	},
	imageView: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: spacing[10]
	},
	detailsView: {
		marginTop: spacing[10],
		marginHorizontal: spacing[6]
	},
	name: {
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	description: {
		lineHeight: 21,
		textAlign: 'center',
		marginTop: spacing[5]
	},
	source: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: spacing[5]
	},
	wikipedia: {
		textDecorationLine: 'underline',
		marginLeft: spacing[2]
	},
	dataSection: {
		marginTop: spacing[5],
		marginHorizontal: spacing[6]
	},
	singleData: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: spacing[4],
		paddingHorizontal: spacing[5],
		marginBottom: spacing[4],
		borderWidth: .5,
		borderColor: colors.gray
	}
})