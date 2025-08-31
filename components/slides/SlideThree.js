// components/slides/SlideThree.js

import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function SlideThree({ fadeAnim, slideAnim }) {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/welcomescreen/slidethreeimage.png')}
        style={[styles.image, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]} 
        resizeMode="contain"
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>Premium Service</Animated.Text>
      <Animated.Text style={[styles.description, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>Schedule limousine and premium transportation directly with the local provider of your choice.</Animated.Text>
    </View>
  );
}

SlideThree.ButtonText = () => <Text style={styles.buttonText}>Get Started</Text>;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 16 },
  image: { width: 120, height: 120, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: '500', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: 12 },
  description: { fontSize: 16, color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: width * 0.85, lineHeight: 22 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
