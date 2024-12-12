// code with only 2 sprite actions addable 
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// export default function ActionPanel() {
//   const [actions, setActions] = useState({ sprite1: [], sprite2: [] });
//   const [activeTab, setActiveTab] = useState('sprite1');
//   const navigation = useNavigation();

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item) => {
//     if (actions) {
//       setActions((prevActions) => ({
//         ...prevActions,
//         [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//       }));
//     }
//   };

//   const handleDeleteAction = (actionId) => {
//     if (actions) {
//       setActions((prevActions) => ({
//         ...prevActions,
//         [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//       }));
//     }
//   };

//   const navigateToMainScreen = () => {
//     navigation.navigate('MainScreen', {
//       sprite1Actions: actions.sprite1,
//       sprite2Actions: actions.sprite2,
//     });
//   };

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         {codeOptions.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.codeButton}
//             onPress={() => handleDrop(item)}
//           >
//             <Text style={styles.codeButtonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.actionSection}>
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'sprite1' && styles.selectedTab]}
//             onPress={() => setActiveTab('sprite1')}
//           >
//             <Text style={styles.tabButtonText}>Action 1 (Sprite 1)</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tabButton, activeTab === 'sprite2' && styles.selectedTab]}
//             onPress={() => setActiveTab('sprite2')}
//           >
//             <Text style={styles.tabButtonText}>Action 2 (Sprite 2)</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.actionList}>
//           {actions[activeTab].length === 0 ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   codeButton: {
//     backgroundColor: '#3B82F6',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   codeButtonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// code for dynamically adding sprites in the action panel but not adding actions
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// export default function ActionPanel({ route }) {
//   const { spriteCount = 2 } = route.params || {}; // Receive spriteCount from MainScreen
//   const navigation = useNavigation();

//   // Initialize actions state for all sprites dynamically
//   const initialActions = {};
//   for (let i = 1; i <= spriteCount; i++) {
//     initialActions[`sprite${i}`] = [];
//   }

//   const [actions, setActions] = useState(initialActions);
//   const [activeTab, setActiveTab] = useState('sprite1'); // Default active tab is sprite1

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//     }));
//   };

//   const handleDeleteAction = (actionId) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//     }));
//   };

//   const navigateToMainScreen = () => {
//     navigation.navigate('MainScreen', { spriteActions: actions });
//   };

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         {codeOptions.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.codeButton}
//             onPress={() => handleDrop(item)}
//           >
//             <Text style={styles.codeButtonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.actionSection}>
//         <View style={styles.tabContainer}>
//           {Array.from({ length: spriteCount }, (_, i) => i + 1).map((spriteIndex) => (
//             <TouchableOpacity
//               key={`sprite${spriteIndex}`}
//               style={[
//                 styles.tabButton,
//                 activeTab === `sprite${spriteIndex}` && styles.selectedTab,
//               ]}
//               onPress={() => setActiveTab(`sprite${spriteIndex}`)}
//             >
//               <Text style={styles.tabButtonText}>Action {spriteIndex} (Sprite {spriteIndex})</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.actionList}>
//           {(!actions[activeTab] || actions[activeTab].length === 0) ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   codeButton: {
//     backgroundColor: '#3B82F6',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   codeButtonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// this is working code for the add sprites and all the actions are performing exactly as needed and no problem.
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// export default function ActionPanel({ route }) {
//   const { spriteCount = 2 } = route.params || {}; // Receive spriteCount from MainScreen
//   const navigation = useNavigation();

//   // Initialize actions state for all sprites dynamically
//   const initialActions = {};
//   for (let i = 1; i <= spriteCount; i++) {
//     initialActions[`sprite${i}`] = [];
//   }

//   const [actions, setActions] = useState(initialActions);
//   const [activeTab, setActiveTab] = useState('sprite1'); // Default active tab is sprite1

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//     }));
//   };

//   const handleDeleteAction = (actionId) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//     }));
//   };

//   const navigateToMainScreen = () => {
//     // Pass all sprite actions back to MainScreen
//     navigation.navigate('MainScreen', { spriteActions: actions });
//   };

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         {codeOptions.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.codeButton}
//             onPress={() => handleDrop(item)}
//           >
//             <Text style={styles.codeButtonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.actionSection}>
//         <View style={styles.tabContainer}>
//           {Array.from({ length: spriteCount }, (_, i) => i + 1).map((spriteIndex) => (
//             <TouchableOpacity
//               key={`sprite${spriteIndex}`}
//               style={[
//                 styles.tabButton,
//                 activeTab === `sprite${spriteIndex}` && styles.selectedTab,
//               ]}
//               onPress={() => setActiveTab(`sprite${spriteIndex}`)}
//             >
//               <Text style={styles.tabButtonText}>Action {spriteIndex} (Sprite {spriteIndex})</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.actionList}>
//           {(!actions[activeTab] || actions[activeTab].length === 0) ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   codeButton: {
//     backgroundColor: '#3B82F6',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   codeButtonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// tested code with little issue
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// export default function ActionPanel({ route }) {
//   const { spriteCount = 2 } = route.params || {}; // Receive spriteCount from MainScreen
//   const navigation = useNavigation();

//   // Initialize actions state for all sprites dynamically
//   const initialActions = {};
//   for (let i = 1; i <= spriteCount; i++) {
//     initialActions[`sprite${i}`] = [];
//   }

//   const [actions, setActions] = useState(initialActions);
//   const [activeTab, setActiveTab] = useState('sprite1'); // Default active tab is sprite1

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//     }));
//   };

//   const handleDeleteAction = (actionId) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//     }));
//   };

//   const navigateToMainScreen = () => {
//     // Pass all sprite actions back to MainScreen
//     navigation.navigate('MainScreen', { spriteActions: actions });
//   };

//   const renderCodeItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.codeButton}
//       onLongPress={drag} // Enables dragging for code options
//     >
//       <Text style={styles.codeButtonText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         <DraggableFlatList
//           data={codeOptions.map((item, index) => ({ id: index.toString(), name: item }))}
//           renderItem={({ item, drag }) => renderCodeItem({ item: item.name, drag })}
//           keyExtractor={(item) => item.id}
//           onDragEnd={({ data }) => {
//             if (data.length) {
//               const draggedItem = data[data.length - 1].name;
//               handleDrop(draggedItem);
//             }
//           }}
//         />
//       </View>

//       <View style={styles.actionSection}>
//         <View style={styles.tabContainer}>
//           {Array.from({ length: spriteCount }, (_, i) => i + 1).map((spriteIndex) => (
//             <TouchableOpacity
//               key={`sprite${spriteIndex}`}
//               style={[
//                 styles.tabButton,
//                 activeTab === `sprite${spriteIndex}` && styles.selectedTab,
//               ]}
//               onPress={() => setActiveTab(`sprite${spriteIndex}`)}
//             >
//               <Text style={styles.tabButtonText}>Action {spriteIndex} (Sprite {spriteIndex})</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.actionList}>
//           {(!actions[activeTab] || actions[activeTab].length === 0) ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   codeButton: {
//     backgroundColor: '#3B82F6',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   codeButtonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// everything is working in this code
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';

// export default function ActionPanel({ route }) {
//   const { spriteCount = 2 } = route.params || {}; // Receive spriteCount from MainScreen
//   const navigation = useNavigation();

//   // Initialize actions state for all sprites dynamically
//   const initialActions = {};
//   for (let i = 1; i <= spriteCount; i++) {
//     initialActions[`sprite${i}`] = [];
//   }

//   const [actions, setActions] = useState(initialActions);
//   const [activeTab, setActiveTab] = useState('sprite1'); // Default active tab is sprite1

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//     }));
//   };

//   const handleDeleteAction = (actionId) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//     }));
//   };

//   const navigateToMainScreen = () => {
//     // Pass all sprite actions back to MainScreen
//     navigation.navigate('MainScreen', { spriteActions: actions });
//   };

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         {codeOptions.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.codeButton}
//             onPress={() => handleDrop(item)}
//           >
//             <Text style={styles.codeButtonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.actionSection}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScrollContainer}>
//           <View style={styles.tabContainer}>
//             {Array.from({ length: spriteCount }, (_, i) => i + 1).map((spriteIndex) => (
//               <TouchableOpacity
//                 key={`sprite${spriteIndex}`}
//                 style={[
//                   styles.tabButton,
//                   activeTab === `sprite${spriteIndex}` && styles.selectedTab,
//                 ]}
//                 onPress={() => setActiveTab(`sprite${spriteIndex}`)}
//               >
//                 <Text style={styles.tabButtonText}>Sprite {spriteIndex}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>

//         <View style={styles.actionList}>
//           {actions[activeTab].length === 0 ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   codeButton: {
//     backgroundColor: '#3B82F6',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   codeButtonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabScrollContainer: {
//     marginBottom: 10,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// Drag and drop functionality integrated
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';
// import Draggable from 'react-native-draggable';

// export default function ActionPanel({ route }) {
//   const { spriteCount = 2 } = route.params || {}; // Receive spriteCount from MainScreen
//   const navigation = useNavigation();

//   // Initialize actions state for all sprites dynamically
//   const initialActions = {};
//   for (let i = 1; i <= spriteCount; i++) {
//     initialActions[`sprite${i}`] = [];
//   }

//   const [actions, setActions] = useState(initialActions);
//   const [activeTab, setActiveTab] = useState('sprite1'); // Default active tab is sprite1

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//     }));
//   };

//   const handleDeleteAction = (actionId) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//     }));
//   };

//   const navigateToMainScreen = () => {
//     // Pass all sprite actions back to MainScreen
//     navigation.navigate('MainScreen', { spriteActions: actions });
//   };

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         {codeOptions.map((item, index) => (
//           <Draggable
//             key={index}
//             x={20}
//             y={index * 60 + 20} // Staggered placement
//             renderSize={60}
//             renderColor="blue"
//             renderText={item}
//             isCircle={true}
//             onDragRelease={(e) => handleDrop(item)}
//           />
//         ))}
//       </View>

//       <View style={styles.actionSection}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScrollContainer}>
//           <View style={styles.tabContainer}>
//             {Array.from({ length: spriteCount }, (_, i) => i + 1).map((spriteIndex) => (
//               <TouchableOpacity
//                 key={`sprite${spriteIndex}`}
//                 style={[
//                   styles.tabButton,
//                   activeTab === `sprite${spriteIndex}` && styles.selectedTab,
//                 ]}
//                 onPress={() => setActiveTab(`sprite${spriteIndex}`)}
//               >
//                 <Text style={styles.tabButtonText}>Sprite {spriteIndex}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>

//         <View style={styles.actionList}>
//           {actions[activeTab].length === 0 ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabScrollContainer: {
//     marginBottom: 10,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// drag and drop working with everything 
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import DraggableFlatList from 'react-native-draggable-flatlist';
// import Draggable from 'react-native-draggable';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// export default function ActionPanel({ route }) {
//   const { spriteCount = 2 } = route.params || {}; // Receive spriteCount from MainScreen
//   const navigation = useNavigation();

//   // Initialize actions state for all sprites dynamically
//   const initialActions = {};
//   for (let i = 1; i <= spriteCount; i++) {
//     initialActions[`sprite${i}`] = [];
//   }

//   const [actions, setActions] = useState(initialActions);
//   const [activeTab, setActiveTab] = useState('sprite1'); // Default active tab is sprite1

//   const codeOptions = [
//     "Move X by 50",
//     "Move X by -50",
//     "Rotate 30",
//     "Go to (0,0)",
//     "Move X=50, Y=50",
//     "Go to random position",
//     "Repeat",
//   ];

//   const handleDrop = (item, x, y) => {
//     const dropArea = {
//       x: screenWidth * 0.1,
//       y: screenHeight * 0.4,
//       width: screenWidth * 0.8,
//       height: screenHeight * 0.4,
//     };

//     if (
//       x > dropArea.x &&
//       x < dropArea.x + dropArea.width &&
//       y > dropArea.y &&
//       y < dropArea.y + dropArea.height
//     ) {
//       setActions((prevActions) => ({
//         ...prevActions,
//         [activeTab]: [...prevActions[activeTab], { id: Date.now(), name: item }],
//       }));
//     }
//   };

//   const handleDeleteAction = (actionId) => {
//     setActions((prevActions) => ({
//       ...prevActions,
//       [activeTab]: prevActions[activeTab].filter((action) => action.id !== actionId),
//     }));
//   };

//   const navigateToMainScreen = () => {
//     // Pass all sprite actions back to MainScreen
//     navigation.navigate('MainScreen', { spriteActions: actions });
//   };

//   const renderActionItem = ({ item, drag }) => (
//     <TouchableOpacity
//       style={styles.actionItem}
//       onLongPress={drag} // Enables dragging when long-pressed
//     >
//       <Text style={styles.actionText}>{item.name}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDeleteAction(item.id)}
//       >
//         <MaterialIcons name="delete" size={24} color="#fff" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.codeSection}>
//         <Text style={styles.sectionHeader}>CODE</Text>
//         {codeOptions.map((item, index) => (
//           <Draggable
//             key={index}
//             x={20}
//             y={index * 60 + 20} // Staggered placement
//             renderSize={60}
//             renderColor="blue"
//             renderText={item}
//             isCircle={true}
//             onDragRelease={(e, gestureState) =>
//               handleDrop(item, gestureState.moveX, gestureState.moveY)
//             }
//             shouldReverse={true} // Ensures draggable returns to original position if not dropped
//           />
//         ))}
//       </View>

//       <View style={styles.actionSection}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabScrollContainer}>
//           <View style={styles.tabContainer}>
//             {Array.from({ length: spriteCount }, (_, i) => i + 1).map((spriteIndex) => (
//               <TouchableOpacity
//                 key={`sprite${spriteIndex}`}
//                 style={[
//                   styles.tabButton,
//                   activeTab === `sprite${spriteIndex}` && styles.selectedTab,
//                 ]}
//                 onPress={() => setActiveTab(`sprite${spriteIndex}`)}
//               >
//                 <Text style={styles.tabButtonText}>Sprite {spriteIndex}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>

//         <View style={styles.actionList}>
//           {actions[activeTab].length === 0 ? (
//             <Text>No actions added for this sprite.</Text>
//           ) : (
//             <DraggableFlatList
//               data={actions[activeTab]}
//               renderItem={renderActionItem}
//               keyExtractor={(item) => item.id.toString()}
//               onDragEnd={({ data }) => {
//                 setActions((prevActions) => ({
//                   ...prevActions,
//                   [activeTab]: data,
//                 }));
//               }}
//             />
//           )}
//         </View>

//         <TouchableOpacity style={styles.executeButton} onPress={navigateToMainScreen}>
//           <Text style={styles.executeButtonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flex: 1,
//     padding: 10,
//   },
//   codeSection: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 20,
//     zIndex: 10, // Ensures it appears above other sections
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   actionSection: {
//     flex: 2,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   tabScrollContainer: {
//     marginBottom: 10,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//   },
//   tabButton: {
//     backgroundColor: '#f7f7f7',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedTab: {
//     backgroundColor: '#4CAF50',
//   },
//   tabButtonText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   actionList: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     minHeight: 100,
//   },
//   actionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   actionText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: '#f44336',
//     padding: 5,
//     borderRadius: 5,
//   },
//   executeButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   executeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
