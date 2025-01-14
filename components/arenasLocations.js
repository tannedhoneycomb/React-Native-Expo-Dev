import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const arenasData = [
  {
    name: 'SkyDome',
    gamesPlayed: 117,
    address: '1 Blue Jays Way, Toronto, ON M5V 1J1',
    city: 'Toronto',
    coordinates: { lat: 43.641692233245884, lng: -79.38950330437903 }
  },
  {
    name: 'Maple Leafs Gardens',
    gamesPlayed: 6,
    address: '60 Carlton St., Toronto, ON M5B 1J2',
    city: 'Toronto',
    coordinates: { lat: 43.66234630061465, lng: -79.38025423136033 }
  },
  {
    name: 'Copps Coliseum',
    gamesPlayed: 3,
    address: '101 York Blvd, Hamilton, ON L8P 4S6',
    city: 'Hamilton',
    coordinates: { lat: 43.25920747938857, lng: -79.87219635835737 }
  },
  {
    name: 'Scotiabank Arena',
    gamesPlayed: 710,
    address: '40 Bay St., Toronto, ON M5J 2X2',
    city: 'Toronto',
    coordinates: { lat: 43.64364456617577, lng: -79.37909891658461 }
  },
  {
    name: 'Amalie Arena',
    gamesPlayed: 37,
    address: '401 Channelside Dr, Tampa, FL 33602, United States',
    city: 'Tampa',
    coordinates: { lat: 27.942955270501848, lng: -82.45182001835182 }
  }
];

export default function ArenasLocations() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [filteredArenas, setFilteredArenas] = useState([]);

  // Function to get the user's current location
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setError(null);
      },
      (error) => {
        setError(error.message);
        setLocation(null);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // Function to handle searching for arenas by city
  const searchArenasByCity = () => {
    if (searchCity.trim().toLowerCase() === 'all') {
      setFilteredArenas(arenasData);  // Show all arenas if the user types 'all'
    } else if (searchCity.trim() === '') {
      setFilteredArenas([]);  // If input is empty, show no arenas
    } else {
      const filtered = arenasData.filter((arena) => 
        arena.city.toLowerCase().includes(searchCity.toLowerCase())
      );
      setFilteredArenas(filtered);
    }
  };

  // Render each arena item
  const renderArenaItem = ({ item }) => (
    <View style={styles.arenaContainer}>
      <Text style={styles.arenaName}>{item.name}</Text>
      <Text style={styles.arenaDetails}>Games Played: {item.gamesPlayed}</Text>
      <Text style={styles.arenaDetails}>Address: {item.address}</Text>
      <Text style={styles.arenaDetails}>City: {item.city}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../assets/Raptors_Spalding_ball.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Arenas & Locations</Text>

        {/* Custom Rounded Button for Get Location */}
        <TouchableOpacity style={styles.roundedButton} onPress={getLocation}>
          <Text style={styles.buttonText}>Get Current Location</Text>
        </TouchableOpacity>

        {location ? (
          <View style={styles.locationInfo}>
            <Text style={styles.text}>Latitude: {location.latitude}</Text>
            <Text style={styles.text}>Longitude: {location.longitude}</Text>
          </View>
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : (
          <Text style={styles.text}>Location not available</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Enter City or 'all' for all arenas"
          value={searchCity}
          onChangeText={setSearchCity}
        />

        {/* Custom Rounded Button for Search Arenas */}
        <TouchableOpacity style={styles.roundedButton} onPress={searchArenasByCity}>
          <Text style={styles.buttonText}>Search Arenas</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Arenas in {searchCity || 'All'}</Text>
        {filteredArenas.length > 0 ? (
          <FlatList
            data={filteredArenas}
            renderItem={renderArenaItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.text}>No arenas found in {searchCity || 'all cities'}</Text>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  locationInfo: {
    marginTop: 20,
  },

  text: {
    fontSize: 20,
  },

  errorText: {
    fontSize: 16,
    color: 'red',
  },

  subTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },

  arenaContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    width: '80%',
  },

  arenaName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  arenaDetails: {
    fontSize: 14,
    color: '#753BBD',
  },

  input: {
    height: 40,
    borderColor: '#CE1141',
    borderWidth: 2,
    marginTop: 20,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
    fontSize: 14,
  },

  roundedButton: {
    backgroundColor: '#CE1141',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
