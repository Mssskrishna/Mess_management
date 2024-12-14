import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const ProfileModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const logout = () => {
        // Handle logout functionality
        console.log('User logged out');
        closeModal();
    };

    return (
        <Modal visible={isModalVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Upper Half Color Background */}
                    <View style={styles.colorBackground}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Profile Image */}
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: 'https://via.placeholder.com/100', // Replace with your image URL
                            }}
                            style={styles.profileImage}
                        />
                    </View>

                    {/* User Details */}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.nameText}>John Doe</Text>
                        <Text style={styles.idText}>ID: 123456</Text>
                    </View>

                    {/* Logout Button */}
                    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },
    colorBackground: {
        backgroundColor: '#4CAF50', // Half background color
        width: '100%',
        height: 120,
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    imageContainer: {
        marginTop: -50, // Pull image to overlap color background
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    detailsContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    idText: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: '#FF3D00',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfileModal;
