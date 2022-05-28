import { StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import Text from '../Text/Text';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';

const Header = ({ title = 'The Planets', backBtn = false }) => {
    const navigation = useNavigation();

    return <View style={styles.header}>
        {backBtn && <Pressable onPress={() => navigation.goBack()}>
            <Entypo name='chevron-left' size={30} color={colors.white} />
        </Pressable>}

        <Text preset='h2' style={styles.headerText}>{title}</Text>
    </View>
}
export default Header;

const styles = StyleSheet.create({
    header: {
        padding: spacing[5],
        borderBottomWidth: .5,
        borderBottomColor: colors.gray,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    }
})