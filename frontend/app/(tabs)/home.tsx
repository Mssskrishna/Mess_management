import { StyleSheet, Image, Text, TouchableOpacity, View, Modal } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MessManagerScreen() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState(null); // State to store the image URL

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const [averagetimeliness,setaveragetimeliness] = useState(0);
    const [averagecleanliness,setaveragecleanliness] = useState(0);
    const [averageqaulity,setaveragequality] = useState(0);
    const [averageservice,setaverageservice] = useState(0);
    const [averagehygiene,setaveragehygiene] = useState(0);
    
    // Fetch the image URL from the API
    useEffect(() => {
        axios.get("https://mess-backend-s3up.onrender.com/mealImage")
            .then((response) => {
                // Assuming the response contains the image file name
                setImageUrl(`https://mess-backend-s3up.onrender.com/uploads/${response.data.imageId}`);
            })
            .catch((error) => {
                console.error("Error fetching image:", error);
            });
        
        axios.get("/http://192.168.240.128:3000/api/feedbacks/average-feedback")
            .then((response) => {
                // Assuming the response contains the image file name
                setaveragehygiene(response.data.data.averageHygiene);
                setaveragequality(response.data.data.averageQuality);
                setaveragetimeliness(response.data.data.averageTimeliness);
                setaverageservice(response.data.data.averageService);
                setaveragecleanliness(response.data.data.averageCleanliness);
                
            })
            .catch((error) => {
                console.error("Error fetching image:", error);
            });
    }, []);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Mess Manager</Text>
                {/* Add Modal Implementation Here */}
                <TouchableOpacity style={styles.profileButton} onPress={openModal}>
                    <Text style={styles.profileButtonText}>P</Text>
                </TouchableOpacity>
            </View>

            {/* Modal Implementation */}
            <Modal visible={isModalVisible} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.blankscreen}></View>
                        <Image
                            source={require('@/assets/images/man.jpg')}  // With your image
                            style={styles.profileImage}
                        />

                        {/* User Details */}
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileId}>N200456</Text>

                        {/* Logout Button */}
                        <View style={styles.modalBottom}>
                            <TouchableOpacity style={styles.logoutButton} onPress={closeModal}>
                                <Text style={styles.logoutButtonText}>Logout</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Today's Lunch Section */}
            <View style={styles.lunchSection}>
                <Text style={styles.lunchTitle}>TODAY'S LUNCH</Text>
                {/* Dynamically render the image from the fetched URL */}
                {imageUrl ? (
                    <Image
                        source={{ uri: imageUrl }} // Set the image dynamically
                        style={styles.lunchImage}
                    />
                ) : (
                    <Text>Loading image...</Text> // Show loading text while image is being fetched
                )}
                <Text style={styles.lunchValue}>Rice with pappu, bendakaya</Text>
                <Text style={styles.rating}>Rating: 8.5/10</Text>
            </View>

            {/* Statistics Section */}
            <View style={styles.statisticsSection}>
                <Text style={styles.statisticsTitle}>Statistics</Text>
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Clean</Text>
                        <Text style={styles.statValue}>{averagecleanliness}/5</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Service</Text>
                        <Text style={styles.statValue}>5/5</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Quality</Text>
                        <Text style={styles.statValue}>5/5</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Hygiene</Text>
                        <Text style={styles.statValue}>5/5</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Timeliness</Text>
                        <Text style={styles.statValue}>5/5</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        marginTop: 30,
        backgroundColor: '#800080',
        padding: 13,
        borderRadius: 5,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileButton: {
        backgroundColor: "#fff",
        padding: 9,
        borderRadius: '50%',
    },
    profileButtonText: {
        color: "#800080",
        fontWeight: "bold",
    },
    blankscreen: {
        width: '100%',
        height: 100,
        backgroundColor: '#1178ed',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: "70%",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingBottom: 20,
        alignItems: "center",
    },
    modalBottom: {
        display: "flex",
        flexDirection: 'row',
        gap: 20
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: "#1178ed",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -50,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
    },
    profileId: {
        fontSize: 16,
        color: "#666",
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: "#1178ed",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    lunchSection: {
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: "#cccccc39",
        paddingVertical: 10,
        borderRadius: 10,
    },
    lunchTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#800080',
    },
    lunchValue: {
        fontSize: 16,
    },
    lunchImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    rating: {
        fontSize: 20,
        color: '#000',
        fontWeight: "bold",
    },
    statisticsSection: {
        padding: 10,
        backgroundColor: '#cccccd33',
        color: '#000000',
        borderRadius: 10,
    },
    statisticsTitle: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        color: '#800080',
        textAlign: 'center',
        marginBottom: 10,
    },
    statsRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    statItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    statLabel: {
        color: '#1178ed',
        paddingHorizontal: 30,
        fontSize: 18,
        flex: 1,
    },
    statValue: {
        color: '#1178ed',
        paddingHorizontal: 30,
        fontSize: 18,
        textAlign: 'right',
    },
    separator: {
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff',
        marginVertical: 5,
    },
});
