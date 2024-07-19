import React, { useEffect, useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import { View, Text, StyleSheet, Button, Modal, Pressable, Alert } from 'react-native';
import axios from 'axios';

const SelectOnDevice = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pickVideo = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      setSelectedVideo(video);
      setModalVisible(true);
    }).catch(error => {
      console.log('Error picking video: ', error);
    });
  };

  const sendVideoToServer = async () => {
    if (selectedVideo) {
      const formData = new FormData();
      formData.append('video', {
        uri: selectedVideo.path,
        type: selectedVideo.mime,
        name: 'video.mp4',
      });

      try {
        const response = await axios.post('YOUR_SERVER_URL', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Video uploaded successfully:', response.data);
        Alert.alert("Success", "Video uploaded successfully.");
      } catch (error) {
        console.error('Error uploading video:', error);
        Alert.alert("Error", "Error uploading video.");
      }
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>갤러리에서 영상 가져오기</Text>
      <Pressable style={styles.pickButton} onPress={pickVideo}>
        <Text style={styles.buttonText}>Pick Video</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>이 비디오를 선택하겠습니까?</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.confirmButton]}
                onPress={sendVideoToServer}>
                <Text style={styles.buttonText}>예</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonText}>아니오</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  pickButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#000000',
  },
  cancelButton: {
    backgroundColor: '#000000',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SelectOnDevice;
