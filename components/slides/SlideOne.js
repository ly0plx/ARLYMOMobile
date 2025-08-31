// components/slides/SlideOne.js

import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SlideOne({ fadeAnim, slideAnim }) {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/arlymo-logo.png')}
        style={[styles.logo]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>ARLYMO</Animated.Text>
      <Animated.Text style={[styles.description, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>Independant Local Drivers. Direct Connections.</Animated.Text>
    </View>
  );
}

SlideOne.ButtonText = () => <Text style={styles.buttonText}>Continue</Text>;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 16 },
  logo: { width: 150, height: 150, marginBottom: 16 },
  title: { fontSize: 40, fontWeight: '9000', color: 'rgba(255,255,255,0.8)', textAlign: 'center', maxWidth: width * 0.85, marginBottom: 12 },
  description: { fontSize: 16, color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: width * 0.85, lineHeight: 22 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});