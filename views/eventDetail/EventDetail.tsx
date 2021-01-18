import React from 'react';
import { View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

// Styled components
import { Header, Description, Map } from './eventDetail.styled';

const EventDetail = () => {
  return (
    <View>
      <Header>Hiking in the mountain</Header>
      <Description>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex
          perspiciatis nobis doloribus unde quo sapiente totam nulla aliquid,
          expedita voluptate repudiandae? Minus soluta harum fuga quas, nam aut
          officia.
        </Paragraph>

        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ex
          perspiciatis nobis doloribus unde quo sapiente totam nulla aliquid,
          expedita voluptate repudiandae? Minus soluta harum fuga quas, nam aut
          officia.
        </Paragraph>

        <Title>Location:</Title>
        <Map
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Description>
    </View>
  );
};

export default EventDetail;
