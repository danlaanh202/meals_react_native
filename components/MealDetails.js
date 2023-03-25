import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    paddding: 8,
    justifyContent: "center",
  },
  detailItem: {
    margin: 4,
    fontSize: 12,
  },
});
const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;
