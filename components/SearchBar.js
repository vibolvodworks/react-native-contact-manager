import { StyleSheet, View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} />
            <Icon color="#161924" name="search" size={25} />
        </View>
    );
}
const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#F6F6F6',
        padding: 2
    },
    searchInput: {
        width: 250,
        height: 35,
        marginRight: 5,
        color: '#161924'
    }
})
export default SearchBar;