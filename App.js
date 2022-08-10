import { React } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import FavouriteScreen from "./screens/FavouriteScreen";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DetailScreen from "./screens/DetailScreen";
import CreatePeopleScreen from "./screens/CreatePeopleScreen";
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomSidebarMenu from "./screens/CustomSidebarMenu";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{ headerShown: false }} useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen options={{drawerIcon: () => <Ionicon name="home" size={23} />}} name="Home" component={HomeScreen} />
      <Drawer.Screen options={{drawerIcon: () => <Ionicon name="people" size={23} />}} name="People" component={HomeScreen} />
      <Drawer.Screen options={{drawerIcon: () => <AntIcon name="contacts" size={23} />}} name="Contact" component={ContactScreen} />
      <Drawer.Screen options={{drawerIcon: () => <MaterialIcons name="favorite" size={23} />}} name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen
            options={{
              title: "Create New"
            }}
            name="CreatePeopleScreen"
            component={CreatePeopleScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
