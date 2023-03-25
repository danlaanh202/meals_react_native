import { FlatList } from "react-native";
import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/dummy";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
