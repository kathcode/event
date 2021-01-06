import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// Constants
import { categories } from '../../../api/categoryList';

// Components
import CategoryItem from '../CategoryItem';

// Shared components
import Search from '../../../shared/components/search/Search';

// Styled
import styles from './categoryList.styled';

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={CategoryItem}
        keyExtractor={(item) => item.key}
      />
      <Search />
    </View>
  );
};

export default CategoryList;
