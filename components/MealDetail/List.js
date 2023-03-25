import { Text, View, StyleSheet } from "react-native";
const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>
        {`\u2023  `}
        {dataPoint}
      </Text>
    </View>
  ));
};
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    background: "#ccc",
  },
  itemText: {},
});
export default List;
