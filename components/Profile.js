import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
const Profile = ({ title, navigation, data = [] }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { profile: data, title: title })}>
      <View key={data.key} style={styles.profileItem}>
        <Image style={styles.profileImage} source={require('../assets/profile-img.jpg')} />
        <View style={styles.profileInfo}>
          <Text>{data.name}</Text>
          <Text>{data.position} at {data.company}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileItem: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: "#c7c4bd",
    borderBottomWidth: 1,
    alignContent: "center"
  },
  profileImage: {
    marginRight: 5,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 75,
  },
  profileInfo: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  }
});


export default Profile;