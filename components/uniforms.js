import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground, ScrollView, Modal, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Uniforms() {
  // State for each button to control visibility of the content
  const [homeRoadJerseysVisible, setHomeRoadJerseysVisible] = useState(false);
  const [alternateJerseysVisible, setAlternateJerseysVisible] = useState(false);
  const [specialJerseysVisible, setSpecialJerseysVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImagesArray, setSelectedImagesArray] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const homeRoadJerseys = [
    require('../assets/uniforms/home_road/1995-A1997.png'),
    require('../assets/uniforms/home_road/1995-B1996-1997.png'),
    require('../assets/uniforms/home_road/2006-2010.png'),
    require('../assets/uniforms/home_road/2020.png'),
    require('../assets/uniforms/home_road/2020(1).png'),
    require('../assets/uniforms/home_road/2022-2023.png'),
  ];

  const alternateJerseys = [
    require('../assets/uniforms/alternate/2003-2004.png'),
    require('../assets/uniforms/alternate/2004-2006.png'),
    require('../assets/uniforms/alternate/2008-2010.png'),
    require('../assets/uniforms/alternate/2010-2014.png'),
    require('../assets/uniforms/alternate/2014-2015_A.png'),
    require('../assets/uniforms/alternate/2015-2017_A.png'),
    require('../assets/uniforms/alternate/2015-2017_B_OVO.png'),
    require('../assets/uniforms/alternate/2017-B2020_Statement.png'),
    require('../assets/uniforms/alternate/2017-C2018_City.png'),
    require('../assets/uniforms/alternate/2018-2019_City.png'),
    require('../assets/uniforms/alternate/2019-2020_B_City.png'),
    require('../assets/uniforms/alternate/2020_Statement.png'),
    require('../assets/uniforms/alternate/2020-2021_A_City.png'),
    require('../assets/uniforms/alternate/2021-2022_A_Statement.png'),
    require('../assets/uniforms/alternate/2021-2022_B_City.png'),
    require('../assets/uniforms/alternate/2022-2023_A_Statement.png'),
    require('../assets/uniforms/alternate/2022-2023_B_City.png'),
    require('../assets/uniforms/alternate/2023-2024_City.png'),
  ];

  const specialJerseys = [
    require('../assets/uniforms/special/1996-1997_Classic.png'),
    require('../assets/uniforms/special/2007-A2008_Europe.png'),
    require('../assets/uniforms/special/2007-B2008_Europe.png'),
    require('../assets/uniforms/special/2007-C2011_SPD.png'),
    require('../assets/uniforms/special/2009-2010_Classic.png'),
    require('../assets/uniforms/special/2011-2014_Troops.png'),
    require('../assets/uniforms/special/2014-2015_B_Troops.png'),
    require('../assets/uniforms/special/2014-2015_C_Classic.png'),
    require('../assets/uniforms/special/2016-2017_Classic.png'),
    require('../assets/uniforms/special/2017-A_CNY.png'),
    require('../assets/uniforms/special/2018-2019_Earned.png'),
    require('../assets/uniforms/special/2019-2020_A_Classic.png'),
    require('../assets/uniforms/special/2020-2021_B_Earned.png'),
    require('../assets/uniforms/special/2024-2025_A_Classic.png'),
  ];

  // Function to open modal with the correct set of images
  const openModal = (imagesArray) => {
    setSelectedImagesArray(imagesArray); // Pass the correct image array
    setSelectedImage(imagesArray[0]); // Set the first image to be displayed
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
    setSelectedImagesArray([]); // Clear images array
  };

  const navigateImage = (direction) => {
    const currentIndex = selectedImagesArray.indexOf(selectedImage);
    let newIndex = currentIndex + direction;
    if (newIndex >= selectedImagesArray.length) newIndex = 0;
    if (newIndex < 0) newIndex = selectedImagesArray.length - 1;
    setSelectedImage(selectedImagesArray[newIndex]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>

      <View style={styles.topImageContainer}>
        <Image source={require('../assets/red_logo.png')} style={styles.topImage} />
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable 
          style={styles.button} 
          onPress={() => openModal(homeRoadJerseys)}
        >
          <Text style={styles.buttonText}>Home & Road Jerseys</Text>
        </Pressable>

        <Pressable 
          style={styles.button} 
          onPress={() => openModal(alternateJerseys)}
        >
          <Text style={styles.buttonText}>Alternate Jerseys</Text>
        </Pressable>

        <Pressable 
          style={styles.button} 
          onPress={() => openModal(specialJerseys)}
        >
          <Text style={styles.buttonText}>Special Jerseys</Text>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/mascot_logo.png')} style={styles.bottomImage} />
      </View>

      {/* Modal for Lightbox View */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >

        <ImageBackground
          source={require('../assets/black_logo.png')}
          style={styles.modalBackground}
        >

          <View style={styles.modalContent}>
            {/* Close button */}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Image in the modal */}
            <Image style={styles.modalImage} source={selectedImage} />

            {/* Navigation Controls */}
            <View style={styles.navButtons}>
              <Pressable onPress={() => navigateImage(-1)} style={styles.navButton}>
                <Text style={styles.navButtonText}>←</Text>
              </Pressable>

              <Pressable onPress={() => navigateImage(1)} style={styles.navButton}>
                <Text style={styles.navButtonText}>→</Text>
              </Pressable>
            </View>
          </View>

        </ImageBackground>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#753BBD',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  topImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  topImage: {
    width: width * 0.9,
    height: height * 0.2,
    resizeMode: 'contain',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },

  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },

  button: {
    width: 250,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },

  buttonText: {
    color: '#753BBD',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  modalImage: {
    width: width - 40,
    height: height - 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#753BBD',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  navButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },

  navButton: {
    backgroundColor: '#753BBD',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  navButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  bottomImage: {
    width: width * 0.9,
    height: height * 0.2,
    resizeMode: 'contain',
  },
});
