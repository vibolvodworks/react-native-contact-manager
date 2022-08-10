import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.customItem}>
                <Image
                    source={require('../assets/profile-img.jpg')}
                    style={styles.image}
                />
                <View style={{alignItems: "center"}}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>Vibol</Text>
                    <Text>Dev at Vodworks</Text>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    customItem: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 75,
        margin: 5
    },
});

export default CustomSidebarMenu;