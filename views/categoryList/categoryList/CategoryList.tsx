import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// Constants
import { categories } from '../../../api/categoryList';

// Components
import CategoryItem from '../CategoryItem';

// Shared components
import Search from '../../../shared/components/search/Search';
import Card from '../../../shared/components/card/Card';

// Styled
import styles from './categoryList.styled';

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {categories.map((category) => (
          <Card text={category.name} />
        ))}
      </View>
      <Search />
    </View>
  );
};

export default CategoryList;
