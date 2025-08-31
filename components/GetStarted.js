// GetStarted.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Welcome to ARLYMO</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Let’s get you set up. Sign up if you’re new, or log in to continue.
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          By continuing, you agree to our{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://arlymo.com/terms")}
          >
            Terms
          </Text>{" "}
          &{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://arlymo.com/privacy")}
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    color: "#9ca3af", // gray-400
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "white",
    shadowColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  signUpText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#111827", // gray-900
    borderWidth: 1,
    borderColor: "#374151", // gray-700
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  footerText: {
    color: "#6b7280", // gray-500
    fontSize: 12,
    marginTop: 40,
    textAlign: "center",
  },
  link: {
    color: "#d1d5db", // gray-300
    textDecorationLine: "underline",
  },
});
