import React, { useRef } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import CustomTabView from '../components/tabView';
import HandleBar from '../components/handlebar';
import CustomSearchBar from '../components/searchBar';
import CustomIcon from '../components/icon';
import { Colors } from '../config';
import TransportCell from '../components/transportCell';

function DiscoverScreen({ navigation }) {

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 650,
            }}
        >
            <TransportCell />


        </View>
    );


    const renderHeader = () => (
        <View style={{ backgroundColor: Colors.white, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
            <HandleBar />
            <CustomTabView />

        </View>
    );

    const sheetRef = useRef(null);

    return (

        <>
            <View
                style={{
                    flex: 1,
                    padding: 20
                }}
            >
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
                renderHeader={renderHeader}
            />
        </>

    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        borderRadius: 10,
        overflow: "hidden"
    },
    searchBarIcons: {
        padding: 5
    }
});

export default DiscoverScreen;