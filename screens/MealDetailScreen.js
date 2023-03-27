import { useContext, useLayoutEffect } from "react";

import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "../store/context/favorites-context";
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 8,
    textAlign: "center",
  },
});
const MealDetailScreen = ({ navigation, route }) => {
  const favoriteMealContext = useContext(FavoritesContextProvider);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealContext.ids.includes(mealId);

  const headerButtonPressHandler = () => {
    console.log("pressed!");
  };

  if (mealIsFavorite) {
    favoriteMealContext.removeFavorite(mealId);
  } else {
    favoriteMealContext.addFavorite(mealId);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name={mealIsFavorite ? "star" : "star-outline"}
            size={26}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: selectedMeal.imageUrl }}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        style={styles.mealDetails}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
};

export default MealDetailScreen;
