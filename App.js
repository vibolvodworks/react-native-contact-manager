import { React, useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import FavouriteScreen from "./screens/FavouriteScreen";
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { FetchPeople } from "./service";
import DetailScreen from "./screens/DetailScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="People" component={HomeScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   FetchPeople(dispatch);
  // });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen options={{headerShown: false}} name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
