import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Weather = props => {
  const {weather, temperature_c, temperature_f} = props;
  const {icon, text} = weather;
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.weatherIcon} source={{uri: `https:${icon}`}} />
        <Text style={styles.tempText}>{temperature_c}˚</Text>
        <Text style={styles.tempText}>{temperature_f}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: 48,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
  weatherIcon: {
    width: 30,
    height: 30,
    tintColor: 'blue',
  },
});

export default Weather;
