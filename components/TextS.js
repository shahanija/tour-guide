import React from 'react';
import { Text, View } from 'react-native';
import * as COLORS from '../utils/Colors.json';

const TextS = ({
    params,
    style,
    text
}) => (
    <View>
        <Text style={[
            { fontSize: 10, color: COLORS.black, fontFamily: "SourceSansPro-Light" }, style]}>{text}</Text>
    </View>
);

export default TextS;
