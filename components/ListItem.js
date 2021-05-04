import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import * as COLORS from '../utils/Colors.json';
import TextS from './TextS';
import TextB from './TextB';
import TextN from './TextN';

const { width, heihgt } = Dimensions.get("window");

const ListItem = ({
    params,
    item,
    index
}) => {
    return (
        <TouchableOpacity style={styles.container}>

            <Image source={{ uri: item.thumbnail_url }}
                style={styles.placeImage} />
            <View style={[styles.contentcontainer, { marginTop: 8 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <Image source={require("../assets/images/pin.png")} style={styles.pinIconstyle} />
                        <TextS text={item.city} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'flex-end', }}>
                        <Image source={require("../assets/images/star.png")} style={styles.rateIconstyle} />
                        <TextB style={{ fontSize: 10, marginEnd: 2 }}
                            text={item.average_rating} />
                        <TextS text={`(${item.number_of_reviews})`} />
                    </View>
                </View>
                <TextN style={{ marginVertical: 8, }} text={item.name} />
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <TextB style={{ fontSize: 12, marginEnd: 2 }}
                        text={`$${item.price_in_usd}`} />
                    <TextS style={{ fontSize: 12 }} text={"/person"} />
                </View>
            </View>
            <TouchableOpacity style={styles.favIconContainer}>
                {!!item.favorited ? <Image source={require("../assets/images/heart.png")} style={[styles.favIconstyle, { tintColor: COLORS.red }]} />
                    : <Image source={require("../assets/images/heart.png")} style={styles.favIconstyle} />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    contentcontainer: {
        paddingHorizontal: 8,
        flex: 1,
        paddingVertical: 4
    },
    container: {
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        height: width * 0.55, width: width * 0.44, marginEnd: 14, borderRadius: 12, elevation: 4
    },
    favIconstyle: { height: 16, width: 16, tintColor: COLORS.grey_tint },
    pinIconstyle: { height: 14, width: 14, tintColor: COLORS.black, marginEnd: 4 },
    rateIconstyle: { height: 14, width: 14, tintColor: COLORS.green_tint, marginEnd: 4 },
    favIconContainer: { padding: 4, position: 'absolute', left: 8, top: 8 },
    placeImage: { flex: 1.5, height: undefined, width: undefined }
});
export default ListItem;
