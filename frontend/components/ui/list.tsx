import React, { SetStateAction, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    FlatList,
    Alert,
} from 'react-native';

const ComplaintsList = ({complaints}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedComplaint, setSelectedComplaint] = useState(null);

    // const complaint = [
    //     { id: '123', type: 'Quality', text: 'Food quality was not good.' },
    //     { id: '124', type: 'Service', text: 'Slow service during lunch.' },
    //     { id: '125', type: 'Hygiene', text: 'Tables were not clean.' },
    //     { id: '126', type: 'Food', text: 'Food was served cold.' },
    //     { id: '127', type: 'Other', text: 'No water available on table.' },
    //     { id: '128', type: 'Other', text: 'No water available on table.' },
    //     { id: '129', type: 'Other', text: 'No water available on table.' },
        
    // ];

    const handleViewComplaint = (complaint:SetStateAction<null>) => {
        setSelectedComplaint(complaint);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedComplaint(null);
    };

    const renderComplaintItem = ({ item }) => (
        <View style={styles.complaintItem}>
            <Text style={styles.complaintText}>Id: {item.Id}   type: {item.Type}</Text>
            <TouchableOpacity
                style={styles.viewButton}
                onPress={() => handleViewComplaint(item)}
            >
                <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Complaints</Text>
            <FlatList
                data={complaints}
                renderItem={renderComplaintItem}
                keyExtractor={(item) => item.id}
            />

            {/* Modal for Viewing Complaint */}
            {modalVisible && selectedComplaint && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalHeading}>Complaint</Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Id:</Text> {selectedComplaint.Id}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Type:</Text> {selectedComplaint.Type}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalLabel}>Text:</Text> {selectedComplaint.text}
                            </Text>
                            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    complaintItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    complaintText: {
        fontSize: 16,
        flex: 1,
    },
    viewButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    viewButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    modalLabel: {
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ComplaintsList;
