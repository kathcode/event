import React from 'react';
import { Text, View } from 'react-native';

// Shared components
import Icon from '../icon/Icon';

// Styles
import { Container, Title } from './logo.styled';

const Logo = () => (
  <Container>
    <Icon iconMaterial="event" color="#7C77B9" size={40} />
    <Title>Events</Title>
  </Container>
);

export default Logo;
