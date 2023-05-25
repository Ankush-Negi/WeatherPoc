import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { API_KEY } from './src/Utils/Constants';

import Weather from './src/Components/Weather/Weather';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature_f: 0,
    temperature_c: 0,
    weatherCondition: null,
    error: null
  };

  fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=3&aqi=yes&alerts=yes`
    )
      .then(res => res.json())
      .then(json => {
          this.setState({
            temperature_f: json.current.temp_f,
            temperature_c: json.current.temp_c,
            weatherCondition: json.current.condition,
            isLoading: false
          });
      });
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      async position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.error('ask location', error.code, error.message);
        this.setState({
          error: 'Error: Unable to fetch location data data'
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }

  render() {
    const { isLoading, weatherCondition, temperature_c, temperature_f } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather weather={weatherCondition} temperature_c={temperature_c} temperature_f={temperature_f} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});