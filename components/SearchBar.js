import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import * as COLORS from '../utils/Colors.json';
import TextN from './TextN';

const SearchBar = ({
    params,
    place,
    navigation,
    pickLocation
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("SearchPlace", {
                pickLocation: pickLocation
            })}
            style={styles.contianer}>
            <Image source={require("../assets/images/search.png")} style={{
                height: 18, width: 18,
                marginEnd: 12,
                tintColor: COLORS.green_tint
            }} />
            <TextN text={place} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    contianer: { flexDirection: 'row', alignItems: 'center', width: '94%', padding: 8, borderWidth: 1, alignSelf: 'center', marginVertical: 12, borderColor: COLORS.grey_tint, borderRadius: 20 },
});
export default SearchBar;
