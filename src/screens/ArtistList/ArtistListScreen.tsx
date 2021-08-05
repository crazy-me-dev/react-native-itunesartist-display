import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArtistListCell from "./ArtistListCell";

const ArtistListScreen = () => {

  const [isLoading, setLoading] = useState(false);
  
  const artists = [{
    artistId: 1010,
    trackName: "Test",
    artistName: "Artist NAme",
    primaryGenreName: "Genre",
    trackCount: 10,
    artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/09/29/4e/09294e74-c916-228e-6ca7-73cc695c5d94/source/60x60bb.jpg",
    releaseDate: "2010-01T12:00:00Z",
    trackPrice: 1.29
  }]

  const handleButtonClick = () => {
    // setLoading(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleButtonClick}>
        <Text style={styles.buttonText}>
          Show Records
        </Text>
      </TouchableOpacity>

      {isLoading ?
        <View>
          <ActivityIndicator 
            style={styles.spinnerStyle}/>
          <Text style={styles.loadingTextStyle}>
            Loading...
          </Text>
        </View>
      :
      <FlatList 
        data={artists}
        style={{width: '100%'}}
        renderItem={({item}) => <ArtistListCell artist={item}/>}
        keyExtractor={item => item.artistId}
      />
      }
    </View>
  );
};

export default ArtistListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    color: 'white'
  },
  spinnerStyle: {
    marginTop: 30
  },
  loadingTextStyle: {
    marginTop: 15
  }
})