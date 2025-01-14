import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity, Animated, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Orbitron_400Regular } from '@expo-google-fonts/orbitron';

const { width, height } = Dimensions.get('window');

const players = [
  { name: 'Bruce Brown', image: require('../assets/players/Bruce_Brown.png'), number: 11, position: 'Guard-Forward' },
  { name: 'Bruno Fernando', image: require('../assets/players/Bruno_Fernando.png'), number: 24, position: 'Center' },
  { name: 'Chris Boucher', image: require('../assets/players/Chris_Boucher.png'), number: 25, position: 'Forward' },
  { name: 'D.J. Carton', image: require('../assets/players/D_J_Carton.png'), number: 3, position: 'Guard' },
  { name: 'Immanuel Quickley', image: require('../assets/players/Immanuel_Quickley.png'), number: 5, position: 'Guard' },
  { name: 'Ja Kobe Walter', image: require('../assets/players/Ja_Kobe_Walter.png'), number: 14, position: 'Guard' },
  { name: 'Jakob Poeltl', image: require('../assets/players/Jakob_Poltl.png'), number: 19, position: 'Center' },
  { name: 'Jamal Shead', image: require('../assets/players/Jamal_Shead.png'), number: 23, position: 'Guard' },
  { name: 'Jamison Battle', image: require('../assets/players/Jamison_Battle.png'), number: 77, position: 'Forward' },
  { name: 'Jonathan Mogbo', image: require('../assets/players/Jonathan_Mogbo.png'), number: 2, position: 'Forward' },
  { name: 'Kelly Olynyk', image: require('../assets/players/Kelly_Olynyk.png'), number: 41, position: 'Forward-Center' },
  { name: 'Ochai Agbaji', image: require('../assets/players/Ochai_Agbaji.png'), number: 30, position: 'Guard' },
  { name: 'RJ Barrett', image: require('../assets/players/RJ_Barrett.png'), number: 9, position: 'Guard-Forward' },
  { name: 'Scottie Barnes', image: require('../assets/players/Scottie_Barnes.png'), number: 4, position: 'Guard-Forward' },
  { name: 'Ulrich Chombhe', image: require('../assets/players/Ulrich_Chombhe.png'), number: 22, position: 'Center' },
  { name: 'Davion Mitchell', image: require('../assets/players/Davion_Mitchell.png'), number: 45, position: 'Guard' },
  { name: 'Garrett Temple', image: require('../assets/players/Garrett_Temple.png'), number: 17, position: 'Guard-Forward' },
  { name: 'Gradey Dick', image: require('../assets/players/Gradey_Dick.png'), number: 1, position: 'Guard-Forward' },
];

// PlayerItem component
function PlayerItem({ item, viewType }) {
  const [modalVisible, setModalVisible] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    if (isFlipped) {
      Animated.timing(flipAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setIsFlipped(false));
    } else {
      Animated.timing(flipAnim, {
        toValue: 180,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        setIsFlipped(true);
        setTimeout(() => {
          Animated.timing(flipAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }).start(() => setIsFlipped(false));
        }, 5000);
      });
    }
  };

  return viewType === 'grid' ? (
    <TouchableOpacity onPress={flipCard} style={styles.playerContainer}>
      <Animated.View style={[styles.playerCard, { transform: [{ rotateY: frontInterpolate }] }]}>
        <Image source={item.image} style={styles.playerImage} />

        <LinearGradient colors={['transparent', '#9464CE']} style={styles.gradient} />
      </Animated.View>

      <Animated.View style={[styles.playerCard, styles.playerBack, { transform: [{ rotateY: backInterpolate }] }]}>
        <Text style={styles.playerNumber}>{item.number}</Text>
      </Animated.View>

      <Text style={styles.playerName}>{item.name}</Text>
    </TouchableOpacity>
  ) : (

    <View style={styles.playerRow}>
      <Image source={item.image} style={styles.playerImageList} />

      <View style={styles.textContainer}>
        <Text style={styles.playerNumber}>{item.number}</Text>
        
        <Text style={styles.playerText}>{item.name}</Text>

        <Text style={styles.positionText}>Position: {item.position}</Text>
      </View>
    </View>
  );
}

// PlayersScreen component
export default function PlayersScreen() {
  const [fontsLoaded] = useFonts({ Orbitron_400Regular });
  const [viewType, setViewType] = useState('grid');

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient colors={['rgba(255, 208, 105, 0.17)', 'rgba(255, 208, 105, 0.07)']} style={styles.container}>
      <Button title={`Switch to ${viewType === 'grid' ? 'List' : 'Grid'} View`} onPress={() => setViewType(viewType === 'grid' ? 'list' : 'grid')} />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Image source={require('../assets/hallOfFame/Vince_Carter.jpg')} style={styles.backgroundImage} />
        <Text style={styles.title}>Player List</Text>
        <Text style={styles.subTitle}>Season 2024 - 2025 Team Roster</Text>

        <FlatList
          key={viewType}
          data={players}
          renderItem={({ item }) => <PlayerItem item={item} viewType={viewType} />}
          keyExtractor={(item) => item.name}
          numColumns={viewType === 'grid' ? 3 : 1}
          contentContainerStyle={viewType === 'grid' ? styles.gridContainer : styles.listContainer}
        />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 5,
  },

  title: {
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Orbitron_400Regular',
    fontWeight: 'bold',
    marginVertical: 10,
  },

  subTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  scrollContent: {
    paddingTop: 50,
  },

  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {
    alignItems: 'stretch',
    paddingHorizontal: 20,
  },

  playerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  playerCard: {
    width: 100,
    height: 100,
    margin: 10,
    backfaceVisibility: 'hidden',
  },
  
  playerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },

  gradient: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    right: 0,
    height: '30%',
    borderRadius: 30,
  },

  playerBack: {
    backgroundColor: 'rgba(148, 100, 206, 0.49)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  playerNumber: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  playerName: {
    color: '#FFFFFF',
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
  },

  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },

  playerText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  
  positionText: {
    fontSize: 14,
    color: '#AAAAAA',
    marginLeft: 10,
  },

  playerImageList: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.3,
    resizeMode: 'cover',
  },
});
