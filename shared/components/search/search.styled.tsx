import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  padding: 10px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  flex-grow: 3;
`;

export const Icon = styled(Ionicons)`
  margin-right: 5;
  margin-left: 5;
`;
