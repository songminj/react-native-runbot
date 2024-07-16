import React, { useState } from "react";
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
      <Text>갤러리에서 영상 가져오기</Text>
      <Button title="Pick Video" onPress={pickVideo} />
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
                style={[styles.button, styles.buttonClose]}
                onPress={sendVideoToServer}>
                <Text style={styles.textStyle}>예</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>아니오</Text>
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SelectOnDevice;
