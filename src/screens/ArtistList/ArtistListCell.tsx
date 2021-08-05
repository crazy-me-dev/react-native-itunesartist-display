import React, { FC } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { Artist } from "../../models/Artist";
import Moment from 'moment';

type Props = {
  artist: Artist
};

const ArtistListCell : FC<Props> = ({ artist }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri:  artist.artworkUrl60 }} style={styles.coverImage} />
      <View style={styles.namePanel}>
        <Text style={styles.trackName}>
          {artist.trackName}
        </Text>
        <Text style={styles.artistName}>
          {artist.artistName} · {artist.primaryGenreName}
        </Text>
        <Text style={styles.tracksCountText}>
          {artist.trackCount} songs
        </Text>
        <Text style={styles.releasedDateText}>
          Released {Moment(artist.releaseDate).format('MMM d, yyyy')}
        </Text>
      </View>
      <Text style={styles.priceText}>
        ${artist.trackPrice}
      </Text>
    </View>
  );
};

export default ArtistListCell;

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  coverImage: {
    width: 80,
    height: 80
  },
  namePanel: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15
  },
  trackName: {
    fontWeight: 'bold',
    fontSize: 14
  },
  artistName: {
    fontSize: 14,
    color: 'gray'
  },
  tracksCountText: {
    fontSize: 11,
    color: 'gray',
    marginTop: 3
  },
  releasedDateText: {
    fontSize: 11,
    color: 'gray'
  },
  priceText: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 20
  }
});