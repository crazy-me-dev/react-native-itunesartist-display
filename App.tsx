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
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import store from './src/redux/store';

 const App = () => {

   const colorScheme = useColorScheme();

   return (
     <Provider store={store}>
       <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation colorScheme={colorScheme}/>
      </SafeAreaProvider>
     </Provider>
   );
 };

 export default App;
