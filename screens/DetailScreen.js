import { useCallback, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, Linking } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePeople } from "../service";

const DetailScreen = ({ route, navigation }) => {
    const { profile, title } = route.params;
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    let people = state.peopleReducer.people;
    let peopleDetial = people.find((person) => {
        return person.id === profile.id;
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
            headerRight: () => (
                <Text onPress={() => navigation.navigate('CreatePeopleScreen', {profileUpdated: peopleDetial})} style={{ paddingRight: 10, color: "#348ceb" }}>Edit</Text>
            ),
        });
    }, [navigation]);

    const onAddContact = () => {
        let updateData = {... peopleDetial, isContact : true};
        UpdatePeople(people, peopleDetial.key, updateData, dispatch);
    }
    const onRemoveContact = () => {
        let updateData = {... peopleDetial, isContact : false};
        UpdatePeople(people, peopleDetial.key, updateData, dispatch);
    }
    const onAddFavourite = () => {
        let updateData = {... peopleDetial, isFavourite : true};
        UpdatePeople(people, peopleDetial.key, updateData, dispatch);
    }
    const onRemoveFavourite = () => {
        let updateData = {... peopleDetial, isFavourite : false};
        UpdatePeople(people, peopleDetial.key, updateData, dispatch);
    }
    const handlePress = useCallback(async (url) => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={require('../assets/profile-img.jpg')} resizeMode="cover" />
                </View>
                <View style={styles.profileInfo}>
                    <Text>Name</Text>
                    <Text style={styles.displayInfo}>{peopleDetial.name}</Text>
                </View>
                <View style={styles.profileInfo}>
                    <Text>Work</Text>
                    <Text style={styles.displayInfo}>{peopleDetial.position} at {peopleDetial.company}</Text>
                </View>
                <View style={styles.profileInfo}>
                    <Text>City</Text>
                    <Text style={styles.displayInfo}>{peopleDetial.city}</Text>
                </View>
                <View style={styles.socialNetworkInfo}>
                    <Text>Social Networks</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
                        <TouchableOpacity onPress={() => handlePress(peopleDetial.social_networks.facebook)} style={{ paddingBottom: 5, paddingTop: 5 }}>
                            <AntIcon color="#161924" name="facebook-square" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress(peopleDetial.social_networks.linkedin)} style={{ padding: 5 }}>
                            <AntIcon color="#161924" name="linkedin-square" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress(peopleDetial.social_networks.twitter)} style={{ padding: 5 }}>
                            <AntIcon color="#161924" name="twitter" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress(profile.social_networks.instagram)} style={{ padding: 5 }}>
                            <AntIcon color="#161924" name="instagram" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                {!peopleDetial.isContact && <View style={styles.profileInfo}>
                    <TouchableOpacity onPress={onAddContact}>
                        <Text style={styles.displayInfo}>Add To Contact</Text>
                    </TouchableOpacity>
                </View>}
                {peopleDetial.isContact && <View style={styles.profileInfo}>
                    <TouchableOpacity onPress={onRemoveContact}>
                        <Text style={styles.remove}>Remove From Contact</Text>
                    </TouchableOpacity>
                </View>}
                {!peopleDetial.isFavourite && <View style={styles.profileInfo}>
                    <TouchableOpacity onPress={onAddFavourite}>
                        <Text style={styles.displayInfo}>Add To Favourite</Text>
                    </TouchableOpacity>
                </View>}
                {peopleDetial.isFavourite && <View style={styles.profileInfo}>
                    <TouchableOpacity onPress={onRemoveFavourite}>
                        <Text style={styles.remove}>Remove From Favourite</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: 5
    },
    image: {
        width: 150,
        height: 150,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 75,
        margin: 5
    },
    profileInfo: {
        backgroundColor: "#FFF",
        padding: 10,
        width: "100%",
        borderRadius: 10,
        marginBottom: 10
    },
    socialNetworkInfo: {
        backgroundColor: "#FFF",
        padding: 10,
        width: "100%",
        borderRadius: 10,
        marginBottom: 10,
        height: 80,
    },
    displayInfo: {
        color: "#348ceb"
    },
    remove: {
        color: "red"
    }
});
export default DetailScreen;