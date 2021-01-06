import React from 'react';
import { Text, View } from 'react-native';
import { ICategoryFlatList } from '../../shared/models/categoryList';

const CategoryItem = ({ item: { name, description } }: ICategoryFlatList) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default CategoryItem;
