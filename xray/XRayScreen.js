import React, { useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import { getMenuHome } from '../apis/MenuApi'
import { useEffect } from 'react';

export default ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imagens, setImagens] = useState([])

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getImagens = async () => {
    console.log(route.params.id)
    const dataImage = await getMenuHome(route.params.id)
    setImagens(dataImage)
  }

  useEffect(() => {
    getImagens()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={imagens}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
            <Modal
              isVisible={isModalVisible}
              animationIn="slideInUp"
              animationOut="slideOutDown">
              <View style={styles.modalContainer}>
                <Image source={{ uri: item.image }} style={styles.fullImage} />
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.closeButton}>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="red"
                    style={styles.closeButtonText}
                  />
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 20,
  },
});
