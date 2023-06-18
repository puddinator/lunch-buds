import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

//Shop Button--------------------------------------------------------------------------------------
const ShopButton = () => {
  return (
    <TouchableOpacity style={styles.LeftbuttonContainer}>
      <Image source={require('../../../assets/images/Apple.png')} style={styles.image} />
      <Text style={styles.buttonText}>Shop</Text>
    </TouchableOpacity>
  );
};
//Watering Button--------------------------------------------------------------------------------------
const WaterButton = () => {
  return (
    <TouchableOpacity style={styles.RightbuttonContainer}>
      <Image source={require('../../../assets/images/WateringCan.png')} style={styles.image} />
      <Text style={styles.buttonText}>Water</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEC',
    alignItems: 'center',
    top: '7%',
  },
  LeftbuttonContainer: { // SHOP BUTTON
    position: 'absolute',
    left: '5%',
    bottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightbuttonContainer: { // WATER BUTTON
    position: 'absolute',
    right: '5%',
    bottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 35,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
  },
  logo: {
    width: 300,
    height: 90,
  },
});

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/LunchBudsLogo.png')} style={styles.logo} />
      <ShopButton />
      <WaterButton />
    </View>
    
  );
};
