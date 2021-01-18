import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Models
import { ICardData } from '../../models/card';

// Shared Components
import Icon from '../icon/Icon';

// Styled
import { Container, TextStyled } from './card.styled';

const Card = ({
  color = 'black',
  itemData: { iconMaterialCommunity, iconMaterial, name, id },
  onPress,
}: IPops) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Icon
          iconMaterial={iconMaterial}
          iconMaterialCommunity={iconMaterialCommunity}
          color={color}
          size={40}
        />
        <TextStyled>{name}</TextStyled>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;

export interface IPops {
  itemData: ICardData;
  color: string;
  onPress: Function;
}
