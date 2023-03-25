import { FlatList } from "react-native";
import { View } from "react-native";
import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/dummy";
function renderCategoryItem(itemData) {
  return (
    <CategoryGrid title={itemData.item.title} color={itemData.item.color} />
  );
}
const CategoriesScreen = () => {
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
