import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import styles from './viewTitle.styles';

const ViewTitle = ({ title }: IProps) => (
  <View>
    <Appbar>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Categories" />
    </Appbar>
  </View>
);

export default ViewTitle;
export interface IProps {
  title: string;
}
