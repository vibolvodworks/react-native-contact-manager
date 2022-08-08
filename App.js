import {React, useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import FavouriteScreen from "./screens/FavouriteScreen";
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { FetchPeople } from "./service";

const Drawer = createDrawerNavigator();

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   FetchPeople(dispatch);
  // });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }} useLegacyImplementation initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="People" component={HomeScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
          <Drawer.Screen name="Favourite" component={FavouriteScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
