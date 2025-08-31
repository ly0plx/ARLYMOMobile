// components/WelcomeScreen.js

import React, { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";

const { width } = Dimensions.get("window");
const slidesComponents = [SlideOne, SlideTwo, SlideThree];

export default function WelcomeScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const logoAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    animateSlide();
  }, []);

  useEffect(() => {
    animateSlide();
  }, [currentSlideIndex]);

  const animateSlide = () => {
    fadeAnim.setValue(0);
    slideAnim.setValue(40);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleNext = () => {
    if (currentSlideIndex < slidesComponents.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.navigate("GetStarted");
    }
  };

  const handleBack = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const CurrentSlide = slidesComponents[currentSlideIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <View style={styles.container}>
        <CurrentSlide fadeAnim={fadeAnim} slideAnim={slideAnim} />
        <View style={styles.buttonContainer}>
          {currentSlideIndex === 0 ? (
            // Full-width button when only one button
            <TouchableOpacity
              style={[styles.button, styles.fullWidthButton]}
              activeOpacity={0.85}
              onPress={handleNext}
            >
              <CurrentSlide.ButtonText />
            </TouchableOpacity>
          ) : (
            // Two buttons when Back is available
            <View style={styles.navButtons}>
              <TouchableOpacity
                style={[styles.button, styles.backButton, styles.halfButton]}
                activeOpacity={0.85}
                onPress={handleBack}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.halfButton]}
                activeOpacity={0.85}
                onPress={handleNext}
              >
                <CurrentSlide.ButtonText />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0a0a0a" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    paddingHorizontal: 24,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#2563eb",
    alignItems: "center",
  },
  backButton: { backgroundColor: "#444" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
  fullWidthButton: { width: "100%" },
  halfButton: { flex: 1, marginHorizontal: 3 },
});
