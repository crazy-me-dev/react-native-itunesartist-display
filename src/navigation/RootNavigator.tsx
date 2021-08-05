import React, { FC } from "react";
import { ColorSchemeName } from "react-native";
import { RootStackPramsList } from "./Types";
import { createStackNavigator } from '@react-navigation/stack';
import ArtistListScreen from "../screens/ArtistListScreen";

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