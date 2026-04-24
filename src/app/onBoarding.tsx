import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  { id: "1", title: "Slide 1", description: "Desc 1" },
  { id: "2", title: "Slide 2", description: "Desc 2" },
  { id: "3", title: "Slide 3", description: "Desc 3" },
];

export default function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation?.replace?.("Login");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        testID="onboarding-list"
        data={slides}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />

      <Text testID="index">Index: {currentIndex}</Text>

      <TouchableOpacity testID="next-button" onPress={goNext}>
        <Text>{currentIndex === slides.length - 1 ? "Start" : "Next"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  slide: { width, alignItems: "center" },
});
