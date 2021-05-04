import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import TextB from '../../components/TextB';
import ListItem from '../../components/ListItem';
import * as COLORS from '../../utils/Colors.json';

const ListContent = ({
    params,
    title,
    listArray
}) => {
    const _keyExtractor = (item, index) => item.key

    return (
        <View style={styles.container}>
            <TextB text={title} />
            <FlatList
                keyExtractor={_keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 12 }}
                data={listArray}
                contentContainerStyle={{ paddingVertical: 4, paddingHorizontal: 2, backgroundColor: COLORS.white }}
                renderItem={ListItem}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { width: "100%", padding: 16, paddingVertical: 18, marginTop: 4 }
});
export default ListContent;
