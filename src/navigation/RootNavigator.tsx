import React, { FC } from "react";
import { ColorSchemeName } from "react-native";
import { RootStackPramsList } from "./types";
import { createStackNavigator } from '@react-navigation/stack';
import ArtistListScreen from "../screens/ArtistList/artistListScreen";

type RootNavigatorProps = {
  colorScheme: ColorSchemeName;
}

const RootNavigator: FC<RootNavigatorProps> = () => {
  
  const Stack = createStackNavigator<RootStackPramsList>();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, gestureEnabled: false }}>
        <Stack.Screen name="ArtistList" component={ArtistListScreen}/>
    </Stack.Navigator>
  )
};

export default RootNavigator;