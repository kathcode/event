import React from 'react';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { Title } from 'react-native-paper';

export const Header = styled(Title)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`;

export const Description = styled.View`
  padding: 10px;
`;

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width - 20};
  height: ${Dimensions.get('window').height - 20};
`;
