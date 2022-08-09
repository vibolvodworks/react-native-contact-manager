import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const DetailHeader = ({ title, navigation }) => {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginRight: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <IonIcon name='arrow-back-outline' color="#348ceb" size={25} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text onPress={() => navigation.goBack()} style={styles.headerText}>{title}</Text>
                </View>
            </View>
            <View style={styles.userAction}>
                <Text style={styles.headerText}>Edit</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#FFF"
    },
    headerText: {
        fontSize: 20,
        color: "#348ceb",
    },
    userAction: {
        flexDirection: 'row',
        color: "#348ceb"
    },
});


export default DetailHeader;