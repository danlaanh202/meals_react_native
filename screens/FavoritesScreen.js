import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy";
import { FavoritesContext } from "../store/context/favorites-context";
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
const FavoritesScreen = () => {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You don't have any favorite meal</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

export default FavoritesScreen;
