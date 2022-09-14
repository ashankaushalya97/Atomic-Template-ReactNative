import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export type Props = {
  placeholder: string;
};

const Button: React.FC<Props> = ({placeholder}) => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{placeholder}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
