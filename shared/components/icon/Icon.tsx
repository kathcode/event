import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Models
import { IIcon } from '../../models/generalComponents';

const Icon = ({
  iconMaterial,
  iconMaterialCommunity,
  color = 'black',
  style = {},
}: IIcon) => {
  const iconMat = (
    <MaterialIcons name={iconMaterial} size={25} color={color} style={style} />
  );
  const iconMatComm = (
    <MaterialCommunityIcons
      name={iconMaterialCommunity}
      size={25}
      color={color}
      style={style}
    />
  );

  return <View>{iconMaterial ? iconMat : iconMatComm}</View>;
};

export default Icon;
