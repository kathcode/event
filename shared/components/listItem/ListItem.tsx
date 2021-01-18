import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Shared
import { ICategoryListItem } from '../../../shared/models/categoryList';

// Styled
import { Container, TitleStyled, IconStyled } from './listItem.styled';

const ListItem = ({ item, navigation }: IPops) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Event detail')}>
      <Container>
        <IconStyled
          iconMaterial={item.iconMaterial}
          iconMaterialCommunity={item.iconMaterialCommunity}
          color="#38a9ba"
        />
        <View>
          <TitleStyled>{item.name}</TitleStyled>
          <Text>{item.description}</Text>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default ListItem;
export interface IPops {
  item: ICategoryListItem;
  navigation: any;
}
