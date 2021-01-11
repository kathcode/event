import React from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';

// Constants
import { categories, getCategoriesById } from '../../../api/categoryList';

// Shared components
import Search from '../../../shared/components/search/Search';
import Card from '../../../shared/components/card/Card';
import ListItem from '../../../shared/components/listItem/ListItem';
import ViewTitle from '../../../shared/components/viewTitle/ViewTitle';

// Styled
import styles from './categoryList.styled';

const CategoryList = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ViewTitle title="Categories" />
        <View style={styles.cardContainer}>
          {categories.map((category) => (
            <Card key={category.id} itemData={category} color="#1D8A99" />
          ))}
        </View>
        <View style={styles.containerSearch}>
          <Search />
        </View>
        <View style={styles.containerList}>
          <FlatList
            data={getCategoriesById}
            renderItem={ListItem}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryList;
