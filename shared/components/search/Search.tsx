import React, { useState } from 'react';
import { Modal, Portal, Button } from 'react-native-paper';

// Styled
import { Container, Input, Icon } from './search.styled';

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
    <Container>
      <Input
        placeholder={placeholder}
        onChangeText={setTextEntered}
        value={textEntered}
      />
      <Icon name="md-calendar" size={25} color="#333" onPress={showModal} />
      <Icon name="md-search" size={25} color="#333" />
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
    </Container>
  );
};

export default Search;
export interface IPops {
  placeholder?: string;
}
