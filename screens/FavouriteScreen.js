import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import { useDispatch } from "react-redux";
import { FetchPeople } from "../service";
import { useEffect } from "react";
import { FAVOURITES } from "../constants";

const FavouriteScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        FetchPeople(dispatch);
    });
    return (
        <View style={styles.container}>
            <Header title={FAVOURITES} navigation={navigation} />
            <ProfileList navigation={navigation} title={FAVOURITES} />
        </View>
    );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});

