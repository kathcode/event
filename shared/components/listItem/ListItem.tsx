import React from 'react';
import { Text, View, _View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Shared
import { ICategoryListItem } from '../../../shared/models/categoryList';

// Shared Components
import Icon from '../icon/Icon';

// Styled
import styles from './listItem.styles';

const ListItem = ({
  item: { name, description, iconMaterial, iconMaterialCommunity },
}: IPops) => {
  const iconMat = (
    <MaterialIcons
      name={iconMaterial}
      size={25}
      color="#1D8A99"
      style={styles.icon}
    />
  );
  const iconMatComm = (
    <MaterialCommunityIcons
      name={iconMaterialCommunity}
      size={24}
      color="black"
    />
  );
  return (
    <View style={styles.container}>
      <Icon
        iconMaterial={iconMaterial}
        iconMaterialCommunity={iconMaterialCommunity}
        style={styles.icon}
        color="#1D8A99"
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text>{description}--</Text>
      </View>
    </View>
  );
};

export default ListItem;
export interface IPops {
  item: ICategoryListItem;
}
