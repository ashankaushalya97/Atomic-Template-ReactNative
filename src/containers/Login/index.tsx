import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {Input, Checkbox, Button} from '../../components/atoms';

export type Props = {};

const Login: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Phone" />
        <Checkbox placeholder="I agree to the company terms" />
        <Button placeholder="Create Account" />
      </SafeAreaView>
    </>
  );
};

export default Login;
