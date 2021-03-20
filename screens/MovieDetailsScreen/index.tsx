import React from "react";

import { Text, View } from "../../components/Themed";
import styles from "./styles";
import movie from "../../assets/data/movie";
import { Image } from "react-native";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    <View>
      <Image source={{ uri: firstEpisode.poster }} style={styles.image} />
    </View>
  );
};

export default MovieDetailsScreen;
