import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Shared
import { ICategoryListItem } from '../../../shared/models/categoryList';

// Shared Components
import Icon from '../icon/Icon';

// Styled
import styles from './listItem.styles';

const ListItem = ({ item, navigation }: IPops) => {
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Event detail')}>
      <View style={styles.container}>
        <Icon
          iconMaterial={item.iconMaterial}
          iconMaterialCommunity={item.iconMaterialCommunity}
          style={styles.icon}
          color="#1D8A99"
        />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
export interface IPops {
  item: ICategoryListItem;
  navigation: any;
}
