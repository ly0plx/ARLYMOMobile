// components/SignUp.js
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SignUp({ navigation }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthMonth: "",
    birthYear: "",
    password: "",
    role: "", // Driver or Passenger
  });

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    slideAnim.setValue(40);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, [step]);

  const steps = [
    // Group 1: Name
    <View style={styles.slide} key="name">
      <Text style={styles.title}>What's your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        value={form.firstName}
        onChangeText={(text) => setForm({ ...form, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        value={form.lastName}
        onChangeText={(text) => setForm({ ...form, lastName: text })}
      />
    </View>,

    // Group 2: Contact
    <View style={styles.slide} key="contact">
      <Text style={styles.title}>How can we reach you?</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
      />
    </View>,

    // Group 3: Birthdate
    <View style={styles.slide} key="birth">
      <Text style={styles.title}>When were you born?</Text>
      <TextInput
        style={styles.input}
        placeholder="Birth Month (MM)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={form.birthMonth}
        onChangeText={(text) => setForm({ ...form, birthMonth: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Birth Year (YYYY)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={form.birthYear}
        onChangeText={(text) => setForm({ ...form, birthYear: text })}
      />
    </View>,

    // Group 4: Password
    <View style={styles.slide} key="password">
      <Text style={styles.title}>Create a password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
    </View>,

    // Group 5: Role
    <View style={styles.slide} key="role">
      <Text style={styles.title}>Register as</Text>
      <TouchableOpacity
        style={[
          styles.button,
          form.role === "Driver" && styles.buttonSelected,
        ]}
        onPress={() => setForm({ ...form, role: "Driver" })}
      >
        <Text style={styles.buttonText}>Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          form.role === "Passenger" && styles.buttonSelected,
        ]}
        onPress={() => setForm({ ...form, role: "Passenger" })}
      >
        <Text style={styles.buttonText}>Passenger</Text>
      </TouchableOpacity>
    </View>,
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // TODO: Hook MongoDB sign-up logic here
      console.log("SignUp form data:", form);
      navigation.navigate("Login"); // Redirect to Login after sign-up
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateY: slideAnim }],
          opacity: fadeAnim,
        }}
      >
        {steps[step]}
      </Animated.View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {step === steps.length - 1 ? "Sign Up" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  footer: {
    padding: 20,
  },
  nextButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },
  buttonSelected: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
