import { Text as RNText, StyleSheet } from 'react-native';

import presets from './text.presets';

const Text = ({ preset = 'default', style, children }) => {
    const textStyles = StyleSheet.compose(presets[preset], style);

    return <RNText style={textStyles}>{children}</RNText>
}
export default Text;