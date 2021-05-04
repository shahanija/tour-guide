import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import * as COLORS from '../../utils/Colors.json';
import SearchBar from '../../components/SearchBar';
import FilterView from './FilterView';
import TextB from '../../components/TextB';
import TextS from '../../components/TextS';
import ListContent from './ListContent';
import { getApi } from '../../utils/Api';
import * as URLs from '../../utils/URLs.json';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Spinner } from 'native-base';


const { width, height } = Dimensions.get("window");


const BannerImage = () => {
    return <View style={styles.bannerImageStyle}>
        <Image source={{ uri: "https://www.visitberkeley.com/imager/s3-us-west-1_amazonaws_com/visit-berkeley/CMS/main-images/Dusk_Chao_694f32bf0e9ef81016789076834d1a45.jpg" }}
            style={{ height: undefined, width: undefined, flex: 1, }} />

        <View style={styles.bannerContentContainer}>
            <TextB
                style={styles.bannerTextStyle} text={"Berkley, California"} />
            <TextB
                style={styles.bannerTextStyle} text={"March 29 66°F"} />
        </View>
    </View>
}

const CancellationReminder = () => {
    return <View style={styles.cancellarionReminderContainer}>
        <TextB text="Free Cancellation" />
        <TextS text="Cance up to 24 hours before your activity for full refund" />

    </View>
}

const Home = ({
    params,
    navigation
}) => {

    const [place, setPlace] = useState("Berkley");
    const [listArray, setListArray] = useState([]);
    const [filterArray, setFilterArray] = useState([{
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: "Tours",
    },
    {
        id: 2,
        name: "Restaurants",
    },
    {
        id: 3,
        name: "Attractions",
    }]);
    const [categories, setCategories] = useState([]);

    const [isLoadingTours, setLoadingTours] = useState(false);


    useEffect(() => {
        // _fetchAllCategories()
        _fetchAlltours()
    }, [])

    const _pickLocation = (lat, lon, place) => {
        setPlace(place)
        _fetchAlltours(lat, lon)
    }

    const _fetchAlltours = (lat, lon) => {

        setLoadingTours({
            isLoadingTours: true
        })

        var url = URLs.TOURS + `?lat=${lat}&lng=${lon}&radius=${3}`;
        headers = null;
        body = null
        onResponse = (responseJson) => {
            setLoadingTours(false)
            if (!!responseJson.success == true) {
                if (!!responseJson.data?.length) {
                    var tours = responseJson.data;

                    setListArray(tours)
                }
            }


        }
        onCatch = (e) => {
            console.log("Catch")
            setLoadingTours({
                isLoadingTours: false
            })

        }

        getApi(url, headers, onResponse, onCatch)
    }

    const _fetchAllCategories = async () => {
        setLoadingTours({
            isLoadingCategories: true
        })

        var url = URLs.CATEGORIES;
        headers = null;
        body = null
        onResponse = (responseJson) => {
            setLoadingTours({
                isLoadingCategories: false
            })
            console.log(JSON.stringify(responseJson))
            if (!!responseJson.success == true) {
                if (!!responseJson.data?.length) {
                    var data = responseJson.data;
                    setCategories(data)
                }
            }


        }
        onCatch = (e) => {
            console.log("Catch")
            setLoadingTours({
                isLoadingCategories: false
            })

        }

        getApi(url, headers, onResponse, onCatch)
    }
    const scrollRef = useRef()

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <SearchBar place={place} navigation={navigation} pickLocation={setPlace} />

            <View style={{ height: 0.5, backgroundColor: COLORS.grey_tint, width: '100%' }} />
            <FilterView filterArray={filterArray} />

            <ScrollView style={{ flex: 1 }}
                ref={scrollRef}
                showsVerticalScrollIndicator={false}>
                {!isLoadingTours ?
                    <>
                        <BannerImage />
                        <ListContent title={"Top Tours In " + place}
                            listArray={listArray} />
                        <ListContent title={"Popular Restaurants in " + place}
                            listArray={listArray} />
                        <ListContent title={"Top Attractions to Visit in " + place}
                            listArray={listArray} />
                        <CancellationReminder />
                        <ListContent title={"Top Tours In " + place}
                            listArray={listArray} />
                    </>
                    : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Spinner color="blue.500" variant="multiColorDotted" />
                    </View>}
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    bannerImageStyle: { opacity: 1, height: width * 0.6, width: null, flex: 1, marginTop: 4 },
    bannerContentContainer: { alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 0, left: 0, bottom: 0 },
    bannerTextStyle: { color: COLORS.white },
    transparentView: { borderWidth: 1, position: 'absolute', right: 0, top: 0, left: 0, bottom: 0, flex: 1, backgroundColor: "#000" },
    cancellarionReminderContainer: { marginHorizontal: 14, elevation: 4, height: width * 0.3, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.green_bg }
});

export default Home;
