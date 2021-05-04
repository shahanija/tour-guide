import React from 'react';
import { Text, View } from 'react-native';
import * as COLORS from '../utils/Colors.json';

const TextN = ({
    params,
    style,
    text
}) => (
    <View>
        <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[
                { fontSize: 12, color: COLORS.black, fontFamily: "SourceSansPro-Regular" }, style]}>{text}</Text>
    </View>
);

export default TextN;
