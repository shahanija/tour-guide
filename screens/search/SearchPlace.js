import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import * as COLORS from '../../utils/Colors.json';
import { Container, Icon, Button } from 'native-base'
import TextB from '../../components/TextB';
import TextN from '../../components/TextN';
import { useState } from 'react/cjs/react.development';

import { Header, Content, List, ListItem, } from 'native-base';


const SearchPlace = ({
    params,
    navigation,
    pickLocation
}) => {
    const [palce, setPalce] = useState("");
    const [recents, setRecents] = useState([
        {
            id: 1, name: "Berkley,USA", lat: 37.871666,
            lon: -122.272781
        },
        {
            id: 1, name: "Brantford,Canada", lat: 43.166668,
            lon: -80.250000
        },
        {
            id: 1, name: "Vancouve,Canada",
            lat: 49.246292, lon: -123.116226
        },
        {
            id: 1, name: "England", lat: 51.509865,
            lon: -0.118092
        }
    ]);
    const [topSearches, setTopSearches] = useState([{
        id: 1, name: "Berkley,USA", lat: 37.871666,
        lon: -122.272781
    },
    {
        id: 1, name: "Brantford,Canada", lat: 43.166668,
        lon: -80.250000
    },
    {
        id: 1, name: "Vancouve,Canada",
        lat: 49.246292, lon: -123.116226
    },
    {
        id: 1, name: "England", lat: 51.509865,
        lon: -0.118092
    }]);

    const _changePlace = (value) => {
        setPalce(value)
    }

    const _goBack = () => {
        navigation.goBack()
    }
    const _keyExtractor = (item, index) => item.key

    return (
        <View style={styles.container}>
            <View style={styles.searchViewContainer}>

                <TouchableOpacity onPress={_goBack}
                    style={{ marginEnd: 16, }}>
                    <Image source={require("../../assets/images/back.png")}
                        style={styles.backButtonStyle} />
                </TouchableOpacity>
                <Icon name="search"
                    style={{ marginEnd: 8 }} />
                <TextInput
                    value={palce}
                    onChangeText={_changePlace}
                    style={{ flex: 1 }} />
            </View>

            <View style={{ marginHorizontal: 18 }}>
                <TextB
                    style={{}}
                    text="Recent searches" />
                <FlatList
                    keyExtractor={_keyExtractor}

                    data={recents}
                    style={{ marginTop: 4 }}
                    ItemSeparatorComponent={() => <View style={{ height: 1, width: '100%', backgroundColor: COLORS.grey_tint, }} />}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity
                            onPress={() => {
                                alert(pickLocation)
                                pickLocation && pickLocation(item.lat, item.lon, item.name)
                                setTimeout(() => { _goBack() }, 500)
                            }} style={{ paddingVertical: 12 }}>
                            <TextN text={item.name} />
                        </TouchableOpacity>
                    }}
                />

            </View>
            <View style={{ marginHorizontal: 18, marginVertical: 12 }}>
                <TextB
                    style={{}}
                    text="Top searches" />
                <FlatList
                    // horizontal
                    data={topSearches}
                    style={{ marginTop: 8, }}
                    keyExtractor={_keyExtractor}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity
                            onPress={() => {
                                pickLocation && pickLocation(item.lat, item.lon, item.name)
                                setTimeout(() => { _goBack() }, 500)

                            }}
                            style={styles.topSearchItemContainer} >
                            <TextN text={item.name} />
                        </TouchableOpacity>
                    }}
                />

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.white },
    topSearchItemContainer: {
        padding: 8, paddingHorizontal: 12,
        margin: 8, borderRadius: 12,
        backgroundColor: COLORS.grey_bg

    },
    searchViewContainer: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: COLORS.green_bg,
        paddingHorizontal: 14, marginVertical: 20,
        marginHorizontal: 14,
    },
    backButtonStyle: { height: 16, width: 16, tintColor: COLORS.black },

});
export default SearchPlace;
