import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, } from 'native-base';
import * as COLORS from '../../utils/Colors.json';
import TextN from '../../components/TextN';

const renderFilterItem = (item, index, onPressFilter) => {
    return <Button
        onPress={() => {
            onPressFilter?.(item.id)
        }}
        style={styles.itemContainer}
        iconLeft light>
        <TextN style={{ color: COLORS.white }} text={item.name} />
    </Button>

}
const ListHeaderComponent = ({ item, index }) => {
    return <Content contentContainerStyle={styles.listHeaderComponentStyle}
    >
        <Button
            style={styles.headerItemStyle}
            iconLeft light>
            <Image source={require("../../assets/images/map.png")} style={{ height: 18, width: 18 }} />
        </Button>
        <Button
            style={styles.headerItemStyle}
            iconLeft light>
            <Image source={require("../../assets/images/filter.png")} style={{ height: 18, width: 18 }} />
        </Button>
    </Content>
}

const FilterView = ({
    params,
    onPressFilter,
    filterArray
}) => {

    const _keyExtractor = (item, index) => item.key

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filterArray}
                keyExtractor={_keyExtractor}
                ListHeaderComponent={ListHeaderComponent}
                style={{ paddingHorizontal: 14, paddingVertical: 4 }}
                renderItem={({ item, index }) => renderFilterItem(item, index, onPressFilter)} />

        </View>
    );
}
const styles = StyleSheet.create({
    filterItemContainer: { marginHorizontal: 2, },
    headerItemStyle: { padding: 4, borderWidth: 1, borderColor: COLORS.grey_tint, borderRadius: 20, marginHorizontal: 2, backgroundColor: COLORS.white, padding: 12, borderRadius: 40 },
    itemContainer: {
        marginHorizontal: 2, borderRadius: 28, backgroundColor: COLORS.black,

        paddingHorizontal: 18
    },
    listHeaderComponentStyle: { flexDirection: 'row', alignItems: 'center' }

});

export default FilterView;
