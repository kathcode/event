import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';

// Constants
import { categories, getCategoriesById } from '../../api/categoryList';

// Shared components
import Search from '../../shared/components/search/Search';
import Card from '../../shared/components/card/Card';
import ListItem from '../../shared/components/listItem/ListItem';

// Styled
import styles from './categoryEventList.styled';

const CategoryEventList = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {categories.map((category) => (
            <Card
              onPress={() => navigation.navigate('Events')}
              key={category.id}
              itemData={category}
              color="#1D8A99"
            />
          ))}
        </View>
        <View style={styles.containerSearch}>
          <Search />
        </View>
        <View style={styles.containerList}>
          <FlatList
            data={getCategoriesById}
            renderItem={(item) => (
              <ListItem item={item.item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryEventList;
