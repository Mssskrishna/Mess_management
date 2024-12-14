import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
const FeedbackForm = () => {
  const [studentId, setStudentId] = useState('N200734'); // Add studentId state
 
  const [timeliness, setTimeliness] = useState('');
  const [service, setService] = useState('');
  const [quality, setQuality] = useState('');
  const [clean, setClean] = useState('');
  const [hygeine,setHygiene] =  useState('');
  const [description,setDescription] = useState('');
  const handleSubmit =async () => {
    // Validate inputs
    if (!timeliness || !service || !quality || !clean || !hygeine) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    // Submit logic (you can connect this to an API or database)
    const feedback = {
      studentId,
      timeliness:parseInt(timeliness),
      service:parseInt(service),
      quality:parseInt(quality),
      cleanliness:parseInt(clean),
      hygiene:parseInt(hygeine),
      review:description
    };

    try {
      // API call to submit feedback
      console.log(feedback);
      const response = await axios.post('https://mess-backend-s3up.onrender.com/api/feedbacks/feedback', feedback);
      // const res = await response.data;
      // Alert.alert(res);
      Alert.alert('Success', response.data.message);
      
    } catch (error) {
      Alert.alert('Error', 'Failed to submit feedback. Please try again.');
      console.error(error);
    }
    // Reset fields
    setTimeliness('');
    setService('');
    setQuality('');
    setClean('');
    setHygiene('');
    setDescription('')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <Text style={styles.headerText}>Mess Manager</Text>
            </View>
      
      
      {/* clean */}
      <View style={styles.feedbackcontainer}>
      <Text style={styles.title}>Feedback Form</Text>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Clean</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0-5"
          maxLength={1}
          value={clean}
          onChangeText={setClean}
        />
      </View>

      {/* Service */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Service</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0-5"
          maxLength={1}
          value={service}
          onChangeText={setService}
        />
      </View>

      {/* Quality */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Quality</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0-5"
          maxLength={1}
          value={quality}
          onChangeText={setQuality}
        />
      </View>

      {/* timeliness */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Timeliness</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0-5"
          maxLength={1}
          value={timeliness}
          onChangeText={setTimeliness}
        />
      </View>

      {/* Hygeine */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Hygiene</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0-5"
          maxLength={1}
          value={hygeine}
          onChangeText={setHygiene}
        />
      </View>

      <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={5}
              placeholder="provide feedback(optional)..."
              value={description}
              onChangeText={setDescription}
            />
      
      
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    marginTop:30,
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  feedbackcontainer:{
    marginTop:30,
    gap:5
  },
  headerText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // justifyContent: 'center',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 100,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    width: 50,
    height: 40,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FeedbackForm;
