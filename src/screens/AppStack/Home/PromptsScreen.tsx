import React from 'react';
import {StyleSheet, SafeAreaView } from "react-native";
import { View, Text, } from "native-base";

export const PromptsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleText}>Here are some prompts:</Text>
      <Text>curated based on your shared interests</Text>

      <Text style={styles.contentText}>Here are some chatgpt prompts</Text>
      <Text>1. I hate coding</Text>
      <Text>2. I want to dieeeeeeeeee</Text>

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEC",
    alignItems: "center",
  },
  titleText: {
    marginTop: 50,
    fontSize: 25,
  },
  contentText: {
    marginTop: 50,
    alignContent: "center",
    fontSize: 20,
  },
})