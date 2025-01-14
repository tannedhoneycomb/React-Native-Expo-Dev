import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

import { MotiView } from 'moti';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Toronto Raptors Encyclopedia
      </Text>
      
      <MotiView 
        from={{
        translateY: -15,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 1000,
          delay: 50,
        }}
        style={styles.shape}
      >

        <Image 
          style={styles.logo} 
          source={require('../assets/black_basic_logo.png')} 
        />

      </MotiView>

      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('Players')}
      >
        <LinearGradient 
          colors={['#753bbd', '#a1a1a4']}
          style={styles.gradientButton}
        >

          <FontAwesome6 name="users-between-lines" size={24} color="black" />

          <Text style={styles.buttonText}>
            Players
          </Text>
        </LinearGradient>
      </Pressable>

      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('hallOfFame')}
      >
        <LinearGradient 
          colors={['#753bbd', '#a1a1a4']}
          style={styles.gradientButton}
        >

          <AntDesign name="Trophy" size={24} color="black" />

          <Text style={styles.buttonText}>
            Hall of Fame
          </Text>
        </LinearGradient>
      </Pressable>

      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('uniforms')}
      >
        <LinearGradient 
          colors={['#753bbd', '#a1a1a4']}
          style={styles.gradientButton}
        >

          <AntDesign name="skin" size={24} color="black" />

          <Text style={styles.buttonText}>
            Uniforms
          </Text>
        </LinearGradient>
      </Pressable>

      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('arenasLocations')}
      >
        <LinearGradient 
          colors={['#753bbd', '#a1a1a4']}
          style={styles.gradientButton}
        >

          <FontAwesome6 name="location-dot" size={18} color="black" />

          <Text style={styles.buttonText}>
            Arenas / Location
          </Text>
        </LinearGradient>
      </Pressable>

      <Image 
        style={styles.sponsorSunLife} 
        source={require('../assets/sponsor_jerseys.png')} 
      />

      <Image 
        style={styles.sponsorTang} 
        source={require('../assets/sponsor_Tangerine_logo.png')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ce1141',
    paddingTop: 0,
  },

  title: {
    fontSize: 35,
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Orbitron_400Regular',
    fontWeight: 'bold',
  },

  logo: {
    height: 200,
    width: 200,
    marginBottom: 1,
  },

  gradientButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
    marginVertical: 6,

    elevation: 5, // Shadow for Android
    shadowColor: '#000000', // Shadow for iOS

    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: '90%',
  },

  buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 10,
  },

  button: {
    width: '90%',
    alignItems: 'center',
  },

  sponsorSunLife: {
    height: 70,
    width: 200,

    elevation: 5, // Shadow for Android
    shadowColor: '#000000', // Shadow for iOS

    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  sponsorTang: {
    height: 30,
    width: 150,

    elevation: 5, // Shadow for Android
    shadowColor: '#000000', // Shadow for iOS

    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
