import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, FlatList, TextInput } from "react-native";
import ArtistListCell from "./artistListCell";
import { useDispatch, useSelector } from "react-redux";
import { searchArtists as searchArtistAction} from '../../redux/actions/artistActions';
import { searchArtists as searchArtistsSelector } from "../../redux/selectors";

const ArtistListScreen = () => {

  const dispatch = useDispatch();

  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [keyword, setKeyword] = useState("");

  const searchArtists  = useSelector(state => state.searchArtists);
  const { loading , error} = searchArtists;

  const artists = useSelector(searchArtistsSelector).artists;

  const handleButtonClick = () => dispatch(searchArtistAction(keyword))

  const handleKeywordTextChange = (text: string) => {
    setKeyword(text);
    if (text) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }

  const contentEmptyView = () => (
    <View style={styles.emptyContentView}>
      <Text style={styles.emptyContentText}>
        Please enter a keyword and tap Show Record button.
      </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.textInput}>
          <TextInput 
            style={styles.textInput}
            placeholder="Enter keywords..."
            placeholderTextColor="gray"
            onChangeText={handleKeywordTextChange}
            />
          <View style={styles.textInputIndicator} />
        </View>
        <TouchableOpacity 
          disabled={!isButtonEnabled}
          style={{
            ...styles.button,
            backgroundColor: isButtonEnabled ? "blue" : "rgba(0,0,0,0.4)",
          }}
          onPress={handleButtonClick}>
          <Text style={styles.buttonText}>
            Show Records
          </Text>
        </TouchableOpacity>
      </View>
      
      {loading ?
        <View testID="loadingView">
          <ActivityIndicator 
            style={styles.spinnerStyle}/>
          <Text style={styles.loadingTextStyle}>
            Loading...
          </Text>
        </View>
      :
      <>
      {error ?
        <View>
          <Text style={styles.loadingTextStyle}>
            {error}
          </Text>
        </View>
      :
        <FlatList 
            data={artists}
            style={styles.listStyle}
            renderItem={({item}) => <ArtistListCell artist={item}/>}
            keyExtractor={item => `${item.artistId}${item.collectionId}${item.trackId}`}
            ListEmptyComponent={contentEmptyView}
          />
      }
      </>
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
  searchBar: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15
  },
  textInput: {
    flex: 1
  },
  textInputIndicator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  button: {
    borderRadius: 3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10
  },
  buttonText: {
    color: 'white'
  },
  spinnerStyle: {
    marginTop: 30
  },
  loadingTextStyle: {
    marginTop: 15
  },
  listStyle: {
    width: '100%', 
    marginTop: 10
  },
  emptyContentView: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  emptyContentText: {
    color: 'gray'
  }
})