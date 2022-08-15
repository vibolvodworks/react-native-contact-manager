import { TextInput, View, Text, Image, StyleSheet, Switch, ScrollView } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePeople, UpdatePeople } from "../service";

const CreatePeopleScreen = ({ route, navigation }) => {
    const state = useSelector(state => state);
    const { profileUpdated, title } = route.params;
    const isEdit = profileUpdated !== null;
    const people = state.peopleReducer.people;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title
        });
    }, [navigation]);

    const dispatch = useDispatch();
    const toggleSwitchContact = () => setUserInput((previousData) => {
        return { ...previousData, isContact: !previousData.isContact }
    });
    const toggleSwitchFavourite = () => setUserInput((previousData) => {
        return { ...previousData, isFavourite: !previousData.isFavourite }
    });
    const [userInput, setUserInput] = useState(
        {
            "avatar": "link",
            "city": profileUpdated !== null ? profileUpdated.city : "",
            "company": profileUpdated !== null ? profileUpdated.company : "",
            "id": isEdit ? profileUpdated.id : Math.random().toString(),
            "isContact": profileUpdated !== null ? profileUpdated.isContact : false,
            "isFavourite": profileUpdated !== null ? profileUpdated.isFavourite : false,
            "name": profileUpdated !== null ? profileUpdated.name : "",
            "position": profileUpdated !== null ? profileUpdated.position : "",
            "social_networks": {
                "facebook": profileUpdated !== null ? profileUpdated.social_networks.facebook : "",
                "instagram": profileUpdated !== null ? profileUpdated.social_networks.instagram : "",
                "linkedin": profileUpdated !== null ? profileUpdated.social_networks.linkedin : "",
                "twitter": profileUpdated !== null ? profileUpdated.social_networks.twitter : ""
            }
        }
    );

    const onChangeTextNameHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, name: text }
        });
    }

    const onChangeTextCityHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, city: text }
        });
    }

    const onChangeTextCompanyHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, company: text }
        });
    }

    const onChangeTextPostionHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, position: text }
        });
    }

    const onChangeTextFacebookHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, social_networks: { ...previousData.social_networks, facebook: text } }
        });
    }

    const onChangeTextLinkedinHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, social_networks: { ...previousData.social_networks, linkedin: text } }
        });
    }

    const onChangeTextTwitterHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, social_networks: { ...previousData.social_networks, twitter: text } }
        });
    }

    const onChangeTextInstagramHandler = (text) => {
        setUserInput((previousData) => {
            return { ...previousData, social_networks: { ...previousData.social_networks, instagram: text } }
        });
    }

    const onCreateHandler = (userInput) => {
        if (isEdit) {
            UpdatePeople(people, profileUpdated.key, userInput, dispatch);
            navigation.navigate("DetailScreen", { profile: userInput });
        } else {
            CreatePeople(userInput, dispatch);
            navigation.navigate("Home");
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Text onPress={() => onCreateHandler(userInput)} style={{ paddingRight: 10, color: "#348ceb" }}>Done</Text>
            ),
        });
    }, [navigation, userInput]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={require('../assets/profile-img.jpg')} resizeMode="cover" />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={userInput.name} onChangeText={(text) => onChangeTextNameHandler(text)} style={styles.inputItem} placeholder="Name" />
                <TextInput value={userInput.company} onChangeText={(text) => onChangeTextCompanyHandler(text)} style={styles.inputItem} placeholder="Company" />
                <TextInput value={userInput.position} onChangeText={(text) => onChangeTextPostionHandler(text)} style={styles.inputItem} placeholder="Position" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={userInput.city} onChangeText={(text) => onChangeTextCityHandler(text)} style={styles.inputItem} placeholder="City" />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.switchItem}>
                    <Text style={styles.switchLabel}>Add to Contact</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={userInput.isContact ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchContact}
                        value={userInput.isContact}
                    />
                </View>
                <View style={styles.switchItem}>
                    <Text style={styles.switchLabel}>Add to Favourite</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={userInput.isFavourite ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchFavourite}
                        value={userInput.isFavourite}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text>Social Networks</Text>
                <TextInput value={userInput.social_networks.facebook} onChangeText={(text) => onChangeTextFacebookHandler(text)} style={styles.inputItem} placeholder="Facebook" />
                <TextInput value={userInput.social_networks.twitter} onChangeText={(text) => onChangeTextTwitterHandler(text)} style={styles.inputItem} placeholder="Twitter" />
                <TextInput value={userInput.social_networks.linkedin} onChangeText={(text) => onChangeTextLinkedinHandler(text)} style={styles.inputItem} placeholder="Linkedin" />
                <TextInput value={userInput.social_networks.instagram} onChangeText={(text) => onChangeTextInstagramHandler(text)} style={styles.inputItem} placeholder="Instagram" />
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
    inputContainer: {
        backgroundColor: "#FFF",
        padding: 10,
        marginBottom: 20
    },
    switchItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        borderBottomColor: "#d8d8d8",
        borderBottomWidth: 1,
    },
    switchLabel: {
        marginTop: 15,
        marginRight: 10,
        color: "#767577"
    },
    inputItem: {
        borderBottomColor: "#d8d8d8",
        borderBottomWidth: 1,
        height: 40
    }
});
export default CreatePeopleScreen;