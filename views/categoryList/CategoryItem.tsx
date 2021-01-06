import React from 'react';
import { Text, View } from 'react-native';

// Shared
import { ICategoryFlatList } from '../../shared/models/categoryList';
import Card from '../../shared/components/card/Card';

const CategoryItem = ({ item: { name, description } }: ICategoryFlatList) => {
  return <Card text={name} />;
};

export default CategoryItem;
