import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ConfettiCannon from 'react-native-confetti-cannon';

const { width } = Dimensions.get('window');

const playerLegends = [
  { name: 'Chauncey Billups', image: require('../assets/hallOfFame/Chauncey_Billups_landscape.jpg') },
  { name: 'Chris Bosh', image: require('../assets/hallOfFame/Chris_Bosh.jpg') },
  { name: 'Hakeen_Olajuwon', image: require('../assets/hallOfFame/Hakeen_Olajuwon.jpg') },
  { name: 'Tracy McGrady', image: require('../assets/hallOfFame/Tracy_McGrady_landscape.jpg') },
  { name: 'Vince Carter', image: require('../assets/hallOfFame/Vince_Carter.jpg') },
];


export default function HallOfFame() {
  const confettiRef = useRef(null); // Create a ref for the confetti cannon

  useEffect(() => {
    const interval = setInterval(() => {
      confettiRef.current.start();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderPlayerItem = ({ item }) => (
    <View style={styles.playerContainer}>
      <View style={styles.glowContainer}>
        <Image source={item.image} style={styles.playerImage} />
      </View>

      <Text style={styles.playerName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{ x: width / 2, y: 0 }}
        explosionSpeed={3000}
        fallSpeed={1000}
        colors={['#B4975A']}
      />
      
      <MaterialCommunityIcons name="basketball-hoop-outline" size={70} color="#CE1141" />

      <Text style={styles.title}>Hall Of Fame</Text>

      <FlatList
        data={playerLegends}
        renderItem={renderPlayerItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 50,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  listContainer: {
    alignItems: 'center',
  },

  playerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },

  glowContainer: {
    borderRadius: 15,
    padding: 5,
    backgroundColor: '#B4975A',
    shadowColor: '#B4975A',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },

  playerImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  playerName: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
  },
});
