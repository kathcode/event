import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

// Constants
import { categories, getCategoriesById } from '../../api/categoryList';

// Shared components
import Search from '../../shared/components/search/Search';
import Card from '../../shared/components/card/Card';
import ListItem from '../../shared/components/listItem/ListItem';

// Styled components
import {
  Container,
  CardContainer,
  SearchContainer,
  ListContainer,
} from './categoryEventList.styled';

const CategoryEventList = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <Container>
        <CardContainer bgColor={colors.primary}>
          {categories.map((category) => (
            <Card
              onPress={() => navigation.navigate('Events')}
              key={category.id}
              itemData={category}
              color="#38a9ba"
            />
          ))}
        </CardContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <ListContainer>
          <FlatList
            data={getCategoriesById}
            renderItem={(item) => (
              <ListItem item={item.item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.key}
          />
        </ListContainer>
      </Container>
    </ScrollView>
  );
};

export default CategoryEventList;
