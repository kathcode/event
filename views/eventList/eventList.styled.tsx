import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../shared/components/icon/Icon';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const IconStyled = styled(Icon)`
  background-color: #fff;
  border-radius: 50px;
  margin: 20px;
`;

export const SearchContainer = styled.View`
  margin-top: -45px;
  padding: 10px;
`;

export const ListContainer = styled.View`
  padding: 10px;
`;
