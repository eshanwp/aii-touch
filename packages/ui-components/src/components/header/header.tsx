import {alignments, brandColors, flexbox, fsHeading4, sh72, sw24} from '@eshanwp/fem-style-sheets';
import React, {FunctionComponent} from 'react';
import {Pressable, Text, TextStyle, View, ViewStyle} from 'react-native';

import {IcoMoon} from '../../../../../apps/demoApp/src/shared/components';

export interface BaseIcoMoon {
    color?: string;
    name: string;
    onPress?: () => void;
    size?: number;
}

export interface CustomHeaderProps {
    customIconStyle?: ViewStyle;
    customRightIcon?: React.JSX.Element;
    customStyle?: ViewStyle;
    leftIcon?: BaseIcoMoon;
    renderTitle?: React.JSX.Element;
    rightIcon?: BaseIcoMoon;
    title?: string;
    titleStyle?: TextStyle;
}

export const CustomHeader: FunctionComponent<CustomHeaderProps> = ({
    customIconStyle,
    customStyle,
    leftIcon,
    renderTitle,
    title,
    titleStyle,
}) => {
    return (
        <View
            style={{
                height: sh72,
                ...flexbox.flexRowCenter,
                ...alignments.spaceBetweenHorizontal,
                ...customStyle,
            }}>
            {leftIcon ? (
                <Pressable
                    onPress={leftIcon.onPress}
                    style={{
                        ...customIconStyle,
                    }}>
                    <IcoMoon
                        color={leftIcon.color || brandColors.green.primary}
                        name={leftIcon.name || 'arrow-left'}
                        size={leftIcon.size || sw24}
                    />
                </Pressable>
            ) : (
                <View style={{width: sw24}} />
            )}

            {renderTitle || <Text style={{...fsHeading4, ...titleStyle}}>{title}</Text>}

            <View style={{width: sw24}} />
        </View>
    );
};
