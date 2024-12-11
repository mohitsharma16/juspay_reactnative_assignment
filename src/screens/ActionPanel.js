import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DraggableFlatList from 'react-native-draggable-flatlist';

export default function ActionPanel() {
  const [actions, setActions] = useState({ sprite1: [], sprite2: [] });
  const [activeTab, setActiveTab] = useState('sprite1');
  const navigation = useNavigation();

  const codeOptions = [
    "Move X by 50",
    "Move X by -50",
    "Rotate 30",
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

  const navigateToMainScreen = () => {
    navigation.navigate('MainScreen', {
      sprite1Actions: actions.sprite1,
      sprite2Actions: actions.sprite2,
    });
  };

  const renderActionItem = ({ item, drag }) => (
    <TouchableOpacity
      style={styles.actionItem}
      onLongPress={drag} // Enables dragging when long-pressed
    >
      <Text style={styles.actionText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteAction(item.id)}
      >
        <MaterialIcons name="delete" size={24} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.codeSection}>
        <Text style={styles.sectionHeader}>CODE</Text>
        {codeOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.codeButton}
            onPress={() => handleDrop(item)}
          >
            <Text style={styles.codeButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

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

        <View style={styles.actionList}>
          {actions[activeTab].length === 0 ? (
            <Text>No actions added for this sprite.</Text>
          ) : (
            <DraggableFlatList
              data={actions[activeTab]}
              renderItem={renderActionItem}
              keyExtractor={(item) => item.id.toString()}
              onDragEnd={({ data }) => {
                setActions((prevActions) => ({
                  ...prevActions,
                  [activeTab]: data,
                }));
              }}
            />
          )}
        </View>

        <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
          <Text style={styles.executeButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// class ActionPanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       actions: {
//         sprite1: [],
//         sprite2: []
//       },
//       activeTab: 'sprite1',
//     };
//     this.actionSectionRef = React.createRef(); // Create ref using createRef()
//   }

//   componentDidMount() {
//     this.actionSectionRef.current.measure((fx, fy, width, height, px, py) => { // Use ref with .current
//       this.setState({
//         droppingArea: { x: px, y: py, width, height }
//       });
//     });
//   }

//   handleDrop = (item) => {
//     this.setState((prevState) => ({
//       actions: {
//         ...prevState.actions,
//         [this.state.activeTab]: [
//           ...prevState.actions[this.state.activeTab],
//           { id: `action-${Date.now()}`, name: item } // Ensure unique IDs using timestamp
//         ],
//       },
//     }));
//   };

//   handleDrag = (item) => {
//     // Logic to handle dragging
//   };

//   handleDeleteAction = (actionId) => {
//     this.setState((prevState) => ({
//       actions: {
//         ...prevState.actions,
//         [this.state.activeTab]: prevState.actions[this.state.activeTab].filter((action) => action.id !== actionId)
//       }
//     }));
//   };

//   navigateToMainScreen = () => {
//     const { actions } = this.state;
//     console.log("Navigating with:", actions);
//     this.props.navigation.navigate('MainScreen', {
//       sprite1Actions: actions.sprite1,
//       sprite2Actions: actions.sprite2,
//     });
//   };

//   renderItem = ({ item, index, drag, isActive }) => (
//     <TouchableOpacity
//       style={[styles.actionItem, isActive && { backgroundColor: '#ddd' }]}
//       onLongPress={drag}
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity style={styles.deleteButton} onPress={() => this.handleDeleteAction(item.id)}>
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   // Ensure unique keys for the render method of lists using index
//   renderCodeOption = (item, index) => (
//     <TouchableOpacity 
//       key={`code-option-${index}`}  // Use index here for unique key, better generate unique IDs similar to actions
//       onLongPress={() => this.handleDrag(item)}
//       style={styles.codeButton}
//     >
//       <Text style={styles.codeButtonText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   render() {
//     const { activeTab, actions } = this.state;
//     const codeOptions = [
//       "Move X by 50", "Move X by -50", "Rotate 360", "Go to (0,0)",
//       "Move X=50, Y=50", "Go to random position", "Repeat"
//     ];

//     return (
//       <View style={styles.container}>
//         <View style={styles.codeSection}>
//           <Text style={styles.sectionHeader}>CODE</Text>
//           {codeOptions.map((item, index) => this.renderCodeOption(item, index))}
//         </View>
//         <View
//           style={styles.actionSection}
//           ref={this.actionSectionRef} // Updated to use createRef
//         >
//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[styles.tabButton, activeTab === 'sprite1' && styles.selectedTab]}
//               onPress={() => this.setState({ activeTab: 'sprite1' })}
//             >
//               <Text style={styles.tabButtonText}>Action 1 (Sprite 1)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tabButton, activeTab === 'sprite2' && styles.selectedTab]}
//               onPress={() => this.setState({ activeTab: 'sprite2' })}
//             >
//               <Text style={styles.tabButtonText}>Action 2 (Sprite 2)</Text>
//             </TouchableOpacity>
//           </View>
//           <DraggableFlatList
//             data={actions[activeTab]}
//             renderItem={this.renderItem}
//             keyExtractor={(item) => `draggable-item-${item.id}`}  // This ensures unique keys for list items
//             onDragEnd={({ data }) => this.setState({ actions: { ...actions, [this.state.activeTab]: data } })}
//           />
//           <TouchableOpacity style={styles.executeButton} onPress={this.navigateToMainScreen}>
//             <Text style={styles.executeButtonText}>Done</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// export default function(props) {
//   const navigation = useNavigation();
//   return <ActionPanel {...props} navigation={navigation} />;
// }



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
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
    minHeight: 100,
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
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