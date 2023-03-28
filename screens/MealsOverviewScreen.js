import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId]);

  return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
