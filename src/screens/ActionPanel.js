import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ActionPanel() {
  const [actions, setActions] = useState({ sprite1: [], sprite2: [] });
  const [activeTab, setActiveTab] = useState('sprite1');
  const navigation = useNavigation();

  const codeOptions = [
    "Move X by 50",
    "Move Y by 50",
    "Rotate 360",
    "Go to (0,0)",
    "Move X=50, Y=50",
    "Go to random position",
    "Repeat",
  ];

  const handleDrop = (item) => {
    if (actions) {
      setActions((prevActions) => ({
        ...prevActions,
        [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
      }));
    }
  };
  
  const handleDeleteAction = (actionId) => {
    if (actions) {
      setActions((prevActions) => ({
        ...prevActions,
        [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
      }));
    }
  };

  // Navigation function to MainScreen with actions
  const navigateToMainScreen = () => {
    navigation.navigate('MainScreen', {
      sprite1Actions: actions.sprite1,
      sprite2Actions: actions.sprite2,
    });
  };

  return (
    <View style={styles.container}>
      {/* Left: Code Section */}
      <View style={styles.codeSection}>
        <Text style={styles.sectionHeader}>CODE</Text>
        {codeOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.codeButton} onPress={() => handleDrop(item)}>
            <Text style={styles.codeButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Right: Action Section */}
      <View style={styles.actionSection}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'sprite1' && styles.selectedTab]}
            onPress={() => setActiveTab('sprite1')}
          >
            <Text style={styles.tabButtonText}>Action 1 (Sprite 1)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'sprite2' && styles.selectedTab]}
            onPress={() => setActiveTab('sprite2')}
          >
            <Text style={styles.tabButtonText}>Action 2 (Sprite 2)</Text>
          </TouchableOpacity>
        </View>

        {/* Action List */}
        <View style={styles.actionList}>
          {actions[activeTab].length === 0 ? (
            <Text>No actions added for this sprite.</Text>
          ) : (
            actions[activeTab].map((action, index) => (
              <View key={index} style={styles.actionItem}>
                <Text style={styles.actionText}>{action.name}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteAction(action.id)}>
                  <MaterialIcons name="delete" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

        {/* Navigate to Main Screen Button */}
        <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
          <Text style={styles.executeButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  codeSection: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  codeButton: {
    backgroundColor: '#3B82F6',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  codeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  actionSection: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabButton: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedTab: {
    backgroundColor: '#4CAF50',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#333',
  },
  actionList: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  executeButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  executeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
