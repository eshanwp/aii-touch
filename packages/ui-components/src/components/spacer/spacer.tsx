import {flexbox} from '@eshanwp/fem-style-sheets';
import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';

export interface SpacerProps {
    space: number;
    isHorizontal?: boolean;
}

export const Spacer: FC<SpacerProps> = ({space, isHorizontal = false}) => {
    const style: ViewStyle = isHorizontal ? {width: space} : {height: space};

    return <View style={style} />;
};

export const FlexSpacer: FC = () => {
    return <View style={flexbox.flexChild} />;
};
