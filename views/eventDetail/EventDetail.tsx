import React from 'react';
import { View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import MapView from 'react-native-maps';

import styles from './eventDetail.styles';

const EventDetail = () => {
  return (
    <View>
      <Title style={styles.header}>Hiking in the mountain</Title>
      <View style={styles.container}>
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
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </View>
  );
};

export default EventDetail;
