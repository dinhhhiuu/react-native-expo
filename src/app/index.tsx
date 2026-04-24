import { PropsWithChildren, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <CustomText>Welcome!</CustomText>

      <Text testID="count">Count: {count}</Text>

      <TouchableOpacity
        testID="increment-button"
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
});
