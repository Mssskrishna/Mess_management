import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const CollapsibleSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true); // State for collapse/expand
    const [widthAnimation] = useState(new Animated.Value(0)); // Animation for width

    // Toggle collapse state
    const toggleSidebar = () => {
        Animated.timing(widthAnimation, {
            toValue: isCollapsed ? 200 : 0, // Expand to 200px or collapse to 0px
            duration: 300, // Animation duration
            useNativeDriver: false, // For layout properties like width
        }).start();
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.container}>
            {/* Sidebar */}
            <Animated.View style={[styles.sidebar, { width: widthAnimation }]}>
                <Text style={styles.menuItem}>Menu 1</Text>
                <Text style={styles.menuItem}>Menu 2</Text>
                <Text style={styles.menuItem}>Menu 3</Text>
            </Animated.View>

            {/* Main Content */}
            <View style={styles.content}>
                <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
                    <Text style={styles.toggleButtonText}>{isCollapsed ? 'Expand' : 'Collapse'}</Text>
                </TouchableOpacity>
                <Text>Main Content Area</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    sidebar: {
        backgroundColor: '#333',
        padding: 10,
    },
    menuItem: {
        color: '#fff',
        marginVertical: 10,
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    toggleButton: {
        padding: 10,
        backgroundColor: '#6200ea',
        borderRadius: 5,
        marginBottom: 10,
    },
    toggleButtonText: {
        color: '#fff',
    },
});

export default CollapsibleSidebar;
