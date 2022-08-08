import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import { useDispatch } from "react-redux";
import { FetchPeople } from "../service";
import { useEffect } from "react";

const ContactScreen = ({ navigation }) => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     FetchPeople(dispatch);
    // });
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ProfileList title="contact" />
        </View>
    );
}

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});
