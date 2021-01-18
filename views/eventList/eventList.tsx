import React from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { Title, useTheme } from 'react-native-paper';

// Constants
import { getCategoriesById } from '../../api/categoryList';

// Models
import { ICategoryListItem } from '../../shared/models/categoryList';

// Shared components
import ListItem from '../../shared/components/listItem/ListItem';
import Search from '../../shared/components/search/Search';

// Styled components
import {
  Header,
  IconStyled,
  SearchContainer,
  ListContainer,
} from './eventList.styled';

const EventList = ({ items = getCategoriesById, navigation }: IPops) => {
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View>
        <Header>
          <IconStyled
            iconMaterialCommunity="hiking"
            color={colors.primary}
            size={60}
          />
          <View>
            <Title>Sports</Title>
            <Text>Description</Text>
          </View>
        </Header>

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
      </View>
    </ScrollView>
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
