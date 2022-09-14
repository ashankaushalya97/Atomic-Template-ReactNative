import * as React from 'react';

import {CommonActions, StackActions} from '@react-navigation/native';

export const isReadyRef: any = React.createRef();

export const navigationRef: any = React.createRef();

export const navigate = (
  name: string,
  params: {username: string; item?: any},
) => {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.navigate(name, params);
};
export const reset = (name: any, params: any) => {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: name, params: params}],
      }),
    );
};
export const replace = (name: string, params: object | undefined) => {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(name, params));
};
export const goBack = () => {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(CommonActions.goBack());
};
export const pop = (index: number | undefined) => {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(StackActions.pop(index));
};

export const nestedReset = (params: any) => {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: params,
      }),
    );
};
