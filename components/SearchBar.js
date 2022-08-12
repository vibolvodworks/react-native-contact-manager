import { StyleSheet, View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({onSearch}) => {
    const onSearchHandler = (text) => {
        onSearch(text);
    }
    return (
        <View style={styles.searchBar}>
            <TextInput onChangeText={(text) => onSearchHandler(text.toLowerCase())} style={styles.searchInput} />
            <Icon style={{marginTop: 5}} color="#c9c8c5" name="search" size={20} />
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
        width: 240,
        height: 35,
        marginRight: 5,
        color: '#161924'
    }
})
export default SearchBar;