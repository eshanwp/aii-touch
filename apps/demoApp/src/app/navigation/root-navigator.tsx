import {createStackNavigator} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';

import {PrivateNavigator, PublicNavigator} from './index';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const RootNavigator: FunctionComponent = () => {
    const defaultOptions = {animationEnabled: false};

    return (
        <Navigator initialRouteName={'Private'} screenOptions={{headerShown: false}}>
            <Screen name="Private" component={PrivateNavigator} options={defaultOptions} />
            <Screen name="Public" component={PublicNavigator} options={defaultOptions} />
        </Navigator>
    );
};
