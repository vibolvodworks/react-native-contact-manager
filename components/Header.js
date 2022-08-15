import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import SearchBar from './SearchBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from "react-redux";
import { CONTACTS, FAVOURITES } from '../constants';
import { filterPeople } from '../redux/peopleSlice';
import { useEffect, useState } from 'react';
import { SearchPeople } from '../redux/peopleAction';

const Header = ({ title, navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [totalContact, setTotalContact] = useState(0);

  let people = state.peopleReducer.people;
  if (title === CONTACTS) {
    people = people.filter(person => person.isContact);
  } else if (title === FAVOURITES) {
    people = people.filter(person => person.isFavourite);
  }

  useEffect(() => {
    setTotalContact(people.length)
  }, []);

  const onSearchHandler = (searchTerm) => {
    people = SearchPeople(people, searchTerm);
    setTotalContact(people.length);
    dispatch(filterPeople({ people: people, searchTerm: searchTerm }));
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
          <Text>{totalContact} Total</Text>
        </View>
      </View>
      <View style={styles.userAction}>
        <SearchBar onSearch={onSearchHandler} />
        <AntIcon
          style={{ marginTop: 7 }}
          onPress={() => navigation.navigate('CreatePeopleScreen', { profileUpdated: null, title: 'Create New' })}
          color="#348ceb" name="adduser" size={25}
        />
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