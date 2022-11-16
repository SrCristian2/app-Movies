import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Carousel from "react-native-snap-carousel-v4";
import Movie from "../components/Movie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HorizontaSlider from "../components/HorizontaSlider";
import { useMovies } from "../hooks/useMovies";

const { width: windowWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation();

const {isLoading,peliculas}=useMovies()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={80} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 10 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={peliculas.nowPlaying}
            renderItem={({ item }) => <Movie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* populares */}
        <HorizontaSlider movies={peliculas.popular} title="Popular" />
        {/* top */}
        <HorizontaSlider movies={peliculas.topRated} title="Top Rated" />
        {/* upcoming */}
        <HorizontaSlider movies={peliculas.upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
