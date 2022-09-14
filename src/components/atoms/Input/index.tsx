import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './styles';

export type Props = {
  placeholder: string;
};

const Input: React.FC<Props> = ({placeholder}) => {
  return (
    <>
      <View style={styles.inputWrap}>
        <TextInput style={styles.inputField} placeholder={placeholder} />
      </View>
    </>
  );
};

export default Input;
