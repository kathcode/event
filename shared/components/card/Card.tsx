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
import styles from './card.styles';

const Card = ({
  color = 'black',
  itemData: { iconMaterialCommunity, iconMaterial, name, id },
  onPress,
}: IPops) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          iconMaterial={iconMaterial}
          iconMaterialCommunity={iconMaterialCommunity}
          color={color}
          size={40}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

export interface IPops {
  itemData: ICardData;
  color: string;
  onPress: Function;
}
