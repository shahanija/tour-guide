import React from 'react';
import { Text, View } from 'react-native';
import * as COLORS from '../utils/Colors.json';

const TextB = ({
    params,
    style,
    text
}) => (
    <View>
        <Text style={[
            { fontSize: 18, color: COLORS.black, fontFamily: "SourceSansPro-Black" }, style]}>{text}</Text>
    </View>
);

export default TextB;
