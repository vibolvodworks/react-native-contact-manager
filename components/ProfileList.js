import { StyleSheet, Image, Text, View } from 'react-native';
import Profile from './Profile';
import { useSelector } from 'react-redux';


export default function ProfileList({ title }) {
  const state = useSelector((state) => state);
  let people = state.peopleReducer.people;
  if (title === "contact") {
      people = people.filter(person => person.isContact);
  } else if (title === "favourite") {
    people = people.filter(person => person.isFavourite);
  }
  return (
    <View style={styles.profileContainer}>
      {
        people.map((person) => <Profile data={person} />)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 5,
  }
});
