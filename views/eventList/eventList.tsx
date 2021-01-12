import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Title } from 'react-native-paper';

// Constants
import { getCategoriesById } from '../../api/categoryList';

// Models
import { ICategoryListItem } from '../../shared/models/categoryList';

// Shared components
import ListItem from '../../shared/components/listItem/ListItem';
import Icon from '../../shared/components/icon/Icon';
import Search from '../../shared/components/search/Search';

// Styles
import styles from './eventList.styled';

const EventList = ({
  icon,
  name,
  description,
  items = getCategoriesById,
  navigation,
}: IPops) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          style={styles.icon}
          iconMaterialCommunity="hiking"
          color="#1D8A99"
          size={60}
        />
        <View>
          <Title>Sports</Title>
          <Text>Description</Text>
        </View>
      </View>

      <View style={styles.containerSearch}>
        <Search />
      </View>

      <FlatList
        data={getCategoriesById}
        renderItem={(item) => (
          <ListItem item={item.item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default EventList;

export interface IPops {
  icon: string;
  name: string;
  description: string;
  items: ICategoryListItem[];
  navigation: any;
}
