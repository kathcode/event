import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Modal, Portal, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

// Styled
import styles from './search.styles';

// Shared components
import Calendar from '../calendar/Calendar';

const placeHolderDefault = 'Search here...';

const Search = ({ placeholder = placeHolderDefault }: IPops) => {
  const [textEntered, setTextEntered] = useState('');
  const [openCalendar, setOpenCalendar] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setTextEntered}
        value={textEntered}
        style={styles.input}
      />
      <Ionicons
        name="md-calendar"
        size={25}
        color="#333"
        style={styles.icon}
        onPress={showModal}
      />
      <Ionicons name="md-search" size={25} color="#333" style={styles.icon} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Calendar />
          <Button mode="contained" onPress={hideModal}>
            Done
          </Button>
        </Modal>
      </Portal>
    </View>
  );
};

export default Search;
export interface IPops {
  placeholder?: string;
}
