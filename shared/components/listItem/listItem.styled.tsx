import React from 'react';
import styled from 'styled-components/native';

// Shared Components
import Icon from '../icon/Icon';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
`;
export const TitleStyled = styled.Text`
  font-weight: 700;
`;

export const IconStyled = styled(Icon)`
  padding-right: 10px;
`;
