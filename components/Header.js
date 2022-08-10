import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import SearchBar from './SearchBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { CONTACTS, FAVOURITES } from '../constants';

const Header = ({ title, navigation }) => {
  const state = useSelector((state) => state);
  let people = state.peopleReducer.people;
  if (title === CONTACTS) {
    people = people.filter(person => person.isContact);
  } else if (title === FAVOURITES) {
    people = people.filter(person => person.isFavourite);
  }

  return (
    <View style={styles.header}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ marginTop: 5, marginRight: 5 }}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
          >
            <FontAwesome5 name='bars' color="#161924" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{people.length} Total</Text>
        </View>
      </View>
      <View style={styles.userAction}>
        <SearchBar />
        <AntIcon onPress={() => navigation.navigate('CreatePeopleScreen', {profileUpdated: null})} color="#161924" name="adduser" size={25} />
      </View>
    </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#c7c4bd"
  },
  userAction: {
    flexDirection: 'row',
  },
});


export default Header;