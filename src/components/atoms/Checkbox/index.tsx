import React, {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

import CheckboxInput from '@react-native-community/checkbox';

export type Props = {
  placeholder: string;
};

const Checkbox: React.FC<Props> = ({placeholder}) => {
  const [value, setValue] = useState<boolean>(true);

  return (
    <>
      <View style={styles.inputWrap}>
        <CheckboxInput
          value={value}
          onValueChange={setValue}
          boxType={'square'}
          onCheckColor={'#ffff'}
          onFillColor={'#4DABEC'}
          style={styles.checkbox}
        />
        <Text style={{paddingHorizontal: 10}}>{placeholder}</Text>
      </View>
    </>
  );
};

export default Checkbox;
