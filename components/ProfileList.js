import { StyleSheet, FlatList } from 'react-native';
import Profile from './Profile';
import { useSelector } from 'react-redux';


export default function ProfileList({navigation, title }) {
  const state = useSelector((state) => state);
  let people = state.peopleReducer.people;
  if (title === "contact") {
      people = people.filter(person => person.isContact);
  } else if (title === "favourite") {
    people = people.filter(person => person.isFavourite);
  }
  return (
    <FlatList data={people} renderItem={
      (itemData) => {
        return <Profile navigation={navigation} title={title} data={itemData.item} />;
      }
    }
      keyExtractor={(item, index) => {
        return item.key;
      }}
    />
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 5,
  }
});
