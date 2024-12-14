import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ComplaintsList from '../../components/ui/list';
import axios from 'axios';
const ComplaintForm = () => {
  const [type, setType] = useState('Food');
  const [description, setDescription] = useState('');
  const [complaints,setComplaints] = useState([]);

  useEffect(() => {
    axios.get('https://mess-backend-s3up.onrender.com/api/complaints/complaint/123')
      .then((response) => {
        setComplaints(response.data); // Update the state with fetched complaints
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to load complaints.');
      });
  }, []); // Empty dependency array ensures this runs once on mount

  const handleSubmit = () => {
    if (!description) {
      Alert.alert('Error', 'Please provide a description for the complaint.');
      return;
    }

    const complaint = {
      Type:type,
      text:description,
      tag:"123"
    };

    axios.post('https://mess-backend-s3up.onrender.com/api/complaints/complaint', complaint)
  .then((response) => {
    console.log('Complaint Submitted:', response.data);
    
    // Check if response.data and response.data.data exist
    if (response.data && response.data.data) {
      setComplaints((prevComplaints) => [response.data.data, ...prevComplaints]); // Add the new complaint to the list
      Alert.alert('Success', 'Complaint submitted successfully!');
      setDescription('');
      setType('Food');
    } else {
      console.error('No complaint data returned from the server');
      Alert.alert('Error', 'Failed to submit complaint.');
    }
  })
  .catch((error) => {
    console.error('Error submitting complaint:', error);
    Alert.alert('Error', 'Failed to submit complaint.');
  });
  };


  return (
    <>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mess Manager</Text>
      </View>

      <Text style={styles.title}>Complaint</Text>

      {/* Type Row */}
      <View style={styles.row}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue) => setType(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Food" value="Food" />
            <Picker.Item label="Hygiene" value="Hygiene" />
            <Picker.Item label="Service" value="Service" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      </View>

      {/* Description Input */}
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={5}
        placeholder="Describe your complaint..."
        value={description}
        onChangeText={setDescription}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    <ComplaintsList complaints={complaints}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginTop:30,
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    height:50,
    fontWeight: 'bold',
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
  },
  dropdownContainer: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
    width: '100%',
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
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ComplaintForm;
