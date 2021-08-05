import { NavigationContainer } from "@react-navigation/native";
import React, {FC} from "react";
import { ColorSchemeName } from "react-native";
import RootNavigator from "./RootNavigator";

type NavigationProps = {
  colorScheme: ColorSchemeName;
};

const Navigation: FC<NavigationProps> = ({ colorScheme }) => (
  <NavigationContainer>
    <RootNavigator colorScheme={colorScheme} />
  </NavigationContainer>
);

export default Navigation;