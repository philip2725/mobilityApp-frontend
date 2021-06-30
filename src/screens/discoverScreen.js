import React, { useRef, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import CustomTabView from '../components/tabView';
import HandleBar from '../components/handlebar';
import CustomSearchBar from '../components/searchBar';
import CustomIcon from '../components/icon';
import { Colors, Spacing } from '../config';
import TransportCell from '../components/transportCell';
import { getScootersInZone } from '../services';

function DiscoverScreen({ navigation }) {

 
    const [transportData, setTransportData] = useState({ data: [] })
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {

        getScootersInZone('COLOGNE').then((response) => {
            setTransportData(response.data)
        })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        // const color = item.id === selectedId ? 'white' : 'black';

        return (
            <TransportCell
                item={item}
                onPress={() => setSelectedId(item.id)}
                // backgroundColor={{ backgroundColor }}
                // textColor={{ color }}
            />
        );
    };

    const renderContent = () => (
        <View style={styles.contentContainer}>
            <HandleBar />
            <CustomTabView icons={iconNames} style={{ marginBottom: Spacing.m }} />

            <FlatList
                data={transportData.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />

        </View>
    );

    const iconNames = ['train', 'car-rental', 'local-taxi', 'electric-scooter', 'directions-bike'];


    const sheetRef = useRef(null);

    return (

        <>
            <View style={{ flex: 1, padding: 20 }}>
                {/* <Button
                    title="Open Bottom Sheet"
                    onPress={() => sheetRef.current.snapTo(1)}
                /> */}

                <View style={styles.searchBarContainer}>
                    <CustomSearchBar placeholder="Wohin?" />
                    <CustomIcon name="business-center" size={26} style={styles.searchBarIcons} />
                    <CustomIcon name="home" size={26} style={styles.searchBarIcons} />
                    <CustomIcon name="star" size={26} style={styles.searchBarIcons} />
                </View>


            </View>

            {/*https://github.com/osdnk/react-native-reanimated-bottom-sheet */}
            <BottomSheet
                ref={sheetRef}
                snapPoints={[650, 300, 120]}
                renderContent={renderContent}
                borderRadius={15}
            // renderHeader={renderHeader}
            />
        </>

    );
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: Spacing.m,
        paddingBottom: Spacing.m,
        height: 650,
    },
    searchBarContainer: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        borderRadius: 10,
        overflow: "hidden"
    },
    searchBarIcons: {
        padding: 5
    },

});

export default DiscoverScreen;