/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * @format
 */

 import React from 'react';
 import {
   StatusBar,
   useColorScheme,
 } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

 const App = () => {

   const colorScheme = useColorScheme();

   return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Navigation colorScheme={colorScheme}/>
    </SafeAreaProvider>
   );
 };

 export default App;
