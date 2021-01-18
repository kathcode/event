import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #eee;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px;
`;

export const SearchContainer = styled.View`
  margin-top: -45px;
  padding: 10px;
`;
export const ListContainer = styled.View`
  padding: 10px;
`;
