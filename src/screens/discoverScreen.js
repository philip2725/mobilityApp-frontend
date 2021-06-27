import React, { useRef } from 'react';
import { Button, View, Text } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import CustomTabView from '../components/tabView';
import HandleBar from '../components/handlebar';
import { Colors } from '../config';

function DiscoverScreen({ navigation }) {

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 650,
            }}
        >
            <Text>Swipe down to close</Text>


        </View>
    );


    const renderHeader = () => (
        <View style={{backgroundColor: Colors.white, borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
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
                }}
            >
                <Button
                    title="Open Bottom Sheet"
                    onPress={() => sheetRef.current.snapTo(1)}
                />
            </View>

            {/*https://github.com/osdnk/react-native-reanimated-bottom-sheet */}
            <BottomSheet
                ref={sheetRef}
                snapPoints={[650, 300, 0]}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
        </>

    );
}

export default DiscoverScreen;